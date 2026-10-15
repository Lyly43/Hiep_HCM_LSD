<template>
   <section class="question-page">
      <header class="page-header">
         <div>
            <p class="eyebrow">Ngân hàng câu hỏi</p>
            <h1>{{ title }}</h1>
            <p class="page-description">{{ questions.length }} câu hỏi trắc nghiệm</p>
         </div>

         <label class="search-box">
            <span>Tìm kiếm câu hỏi</span>
            <input
               v-model.trim="keyword"
               type="search"
               placeholder="Nhập STT hoặc nội dung..."
            >
         </label>
      </header>

      <div class="question-layout">
         <aside class="question-sidebar">
            <div class="sidebar-heading">
               <div>
                  <p class="sidebar-title">Danh sách câu</p>
                  <p>{{ answeredCount }}/{{ questions.length }} câu đã chọn</p>
               </div>
               <span class="progress-percent">{{ progressPercent }}%</span>
            </div>

            <div class="progress-track" aria-hidden="true">
               <span :style="{ width: `${progressPercent}%` }"></span>
            </div>

            <div class="answer-summary">
               <div class="summary-item correct">
                  <span>Đúng</span>
                  <strong>{{ correctCount }}</strong>
               </div>
               <div class="summary-item wrong">
                  <span>Sai</span>
                  <strong>{{ wrongCount }}</strong>
               </div>
            </div>

            <button
               class="check-all-button"
               type="button"
               :disabled="pendingCheckCount === 0"
               @click="checkAllAnswers"
            >
               <span>Kiểm tra toàn bộ</span>
               <small>{{ pendingCheckCount }} câu chưa kiểm tra</small>
            </button>

            <div class="question-grid">
               <button
                  v-for="question in questions"
                  :key="question.stt"
                  type="button"
                  :aria-label="`Đi tới câu ${question.stt}`"
                  :class="{
                     active: activeQuestionStt === question.stt,
                     answered: selectedAnswers[question.stt] && !isChecked(question.stt),
                     correct: isChecked(question.stt) && isCorrect(question),
                     wrong: isChecked(question.stt) && !isCorrect(question)
                  }"
                  @click="goToQuestion(question.stt)"
               >
                  {{ question.stt }}
               </button>
            </div>

            <div class="question-legend">
               <span><i class="legend-dot answered"></i>Đã chọn</span>
               <span><i class="legend-dot correct"></i>Đúng</span>
               <span><i class="legend-dot wrong"></i>Sai</span>
            </div>
         </aside>

         <main class="question-content">
            <div class="list-toolbar">
               <p>
                  Hiển thị <strong>{{ resultStart }}–{{ resultEnd }}</strong>
                  trong <strong>{{ filteredQuestions.length }}</strong> câu
               </p>

               <label class="page-size">
                  Số câu mỗi trang
                  <select v-model.number="pageSize">
                     <option :value="10">10</option>
                     <option :value="20">20</option>
                     <option :value="50">50</option>
                  </select>
               </label>
            </div>

            <div v-if="visibleQuestions.length" class="question-list">
               <article
                  v-for="question in visibleQuestions"
                  :id="`question-${question.stt}`"
                  :key="question.stt"
                  class="question-card"
                  :class="{ active: activeQuestionStt === question.stt }"
               >
                  <div class="question-heading">
                     <span class="question-number">Câu {{ question.stt }}</span>
                     <h2>{{ question.cauHoi }}</h2>
                  </div>

                  <ol class="answer-list">
                     <li
                        v-for="option in getOptions(question)"
                        :key="option.key"
                        :class="{
                           selected: !isChecked(question.stt) && isSelected(question.stt, option.key),
                           correct: isChecked(question.stt) && question.dapAn === option.key,
                           wrong:
                              isChecked(question.stt) &&
                              isSelected(question.stt, option.key) &&
                              question.dapAn !== option.key
                        }"
                     >
                        <button
                           class="answer-option"
                           type="button"
                           :disabled="isChecked(question.stt)"
                           :aria-pressed="isSelected(question.stt, option.key)"
                           @click="selectAnswer(question.stt, option.key)"
                        >
                           <span class="answer-label">{{ option.label }}</span>
                           <span class="answer-text">{{ option.text }}</span>
                           <span
                              v-if="isChecked(question.stt) && question.dapAn === option.key"
                              class="answer-status correct-label"
                           >
                              Đáp án đúng
                           </span>
                           <span
                              v-else-if="
                                 isChecked(question.stt) &&
                                 isSelected(question.stt, option.key) &&
                                 question.dapAn !== option.key
                              "
                              class="answer-status wrong-label"
                           >
                              Bạn đã chọn
                           </span>
                        </button>
                     </li>
                  </ol>

                  <div class="question-actions">
                     <button
                        v-if="!isChecked(question.stt)"
                        class="check-answer"
                        type="button"
                        :disabled="!selectedAnswers[question.stt]"
                        @click="checkAnswer(question.stt)"
                     >
                        Kiểm tra
                     </button>
                     <button
                        v-else
                        class="retry-answer"
                        type="button"
                        @click="resetAnswer(question.stt)"
                     >
                        Chọn lại
                     </button>

                     <p
                        v-if="isChecked(question.stt)"
                        class="answer-result"
                        :class="{ success: isCorrect(question), error: !isCorrect(question) }"
                     >
                        <strong>{{ isCorrect(question) ? "Chính xác!" : "Chưa đúng." }}</strong>
                        Đáp án đúng: {{ question.dapAnText }}
                     </p>
                  </div>
               </article>
            </div>

            <div v-else class="empty-state">
               <h2>Không tìm thấy câu hỏi</h2>
               <p>Hãy thử một từ khóa khác.</p>
            </div>

            <nav v-if="totalPages > 1" class="pagination" aria-label="Phân trang câu hỏi">
               <button type="button" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">
                  Trang trước
               </button>
               <span>Trang {{ currentPage }} / {{ totalPages }}</span>
               <button
                  type="button"
                  :disabled="currentPage === totalPages"
                  @click="goToPage(currentPage + 1)"
               >
                  Trang sau
               </button>
            </nav>
         </main>
      </div>
   </section>
</template>

<script>
export default {
   name: "QuestionBankView",

   props: {
      title: {
         type: String,
         required: true,
      },
      questions: {
         type: Array,
         default: () => [],
      },
   },

   data() {
      return {
         keyword: "",
         currentPage: 1,
         pageSize: 10,
         selectedAnswers: {},
         checkedAnswers: {},
         activeQuestionStt: this.questions[0]?.stt ?? null,
      };
   },

   computed: {
      filteredQuestions() {
         const searchValue = this.keyword.toLocaleLowerCase("vi");

         if (!searchValue) {
            return this.questions;
         }

         return this.questions.filter((question) => {
            const searchableText = [
               question.stt,
               question.cauHoi,
               question.traloi1,
               question.traloi2,
               question.traloi3,
               question.traloi4,
            ]
               .join(" ")
               .toLocaleLowerCase("vi");

            return searchableText.includes(searchValue);
         });
      },

      totalPages() {
         return Math.max(1, Math.ceil(this.filteredQuestions.length / this.pageSize));
      },

      visibleQuestions() {
         const startIndex = (this.currentPage - 1) * this.pageSize;
         return this.filteredQuestions.slice(startIndex, startIndex + this.pageSize);
      },

      resultStart() {
         if (!this.filteredQuestions.length) {
            return 0;
         }

         return (this.currentPage - 1) * this.pageSize + 1;
      },

      resultEnd() {
         return Math.min(this.currentPage * this.pageSize, this.filteredQuestions.length);
      },

      answeredCount() {
         return Object.values(this.selectedAnswers).filter(Boolean).length;
      },

      correctCount() {
         return this.questions.filter(
            (question) => this.isChecked(question.stt) && this.isCorrect(question)
         ).length;
      },

      wrongCount() {
         return this.questions.filter(
            (question) => this.isChecked(question.stt) && !this.isCorrect(question)
         ).length;
      },

      pendingCheckCount() {
         return this.questions.filter(
            (question) => this.selectedAnswers[question.stt] && !this.isChecked(question.stt)
         ).length;
      },

      progressPercent() {
         if (!this.questions.length) {
            return 0;
         }

         return Math.round((this.answeredCount / this.questions.length) * 100);
      },
   },

   watch: {
      keyword() {
         this.currentPage = 1;
      },

      pageSize() {
         this.currentPage = 1;
      },

      totalPages(newTotal) {
         if (this.currentPage > newTotal) {
            this.currentPage = newTotal;
         }
      },
   },

   methods: {
      getOptions(question) {
         return [
            { key: "traloi1", label: "A", text: question.traloi1 },
            { key: "traloi2", label: "B", text: question.traloi2 },
            { key: "traloi3", label: "C", text: question.traloi3 },
            { key: "traloi4", label: "D", text: question.traloi4 },
         ];
      },

      selectAnswer(stt, answerKey) {
         if (!this.isChecked(stt)) {
            this.selectedAnswers[stt] = answerKey;
            this.activeQuestionStt = stt;
         }
      },

      isSelected(stt, answerKey) {
         return this.selectedAnswers[stt] === answerKey;
      },

      isChecked(stt) {
         return Boolean(this.checkedAnswers[stt]);
      },

      checkAnswer(stt) {
         if (this.selectedAnswers[stt]) {
            this.checkedAnswers[stt] = true;
         }
      },

      checkAllAnswers() {
         this.questions.forEach((question) => {
            if (this.selectedAnswers[question.stt] && !this.isChecked(question.stt)) {
               this.checkedAnswers[question.stt] = true;
            }
         });
      },

      isCorrect(question) {
         return this.selectedAnswers[question.stt] === question.dapAn;
      },

      resetAnswer(stt) {
         delete this.selectedAnswers[stt];
         delete this.checkedAnswers[stt];
      },

      goToQuestion(stt) {
         const navigate = () => {
            const questionIndex = this.filteredQuestions.findIndex(
               (question) => question.stt === stt
            );

            if (questionIndex < 0) {
               return;
            }

            this.currentPage = Math.floor(questionIndex / this.pageSize) + 1;
            this.activeQuestionStt = stt;

            this.$nextTick(() => {
               document.getElementById(`question-${stt}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
               });
            });
         };

         if (this.keyword) {
            this.keyword = "";
            this.$nextTick(navigate);
            return;
         }

         navigate();
      },

      goToPage(page) {
         this.currentPage = Math.min(Math.max(page, 1), this.totalPages);

         this.$nextTick(() => {
            const firstQuestion = this.visibleQuestions[0];
            if (firstQuestion) {
               this.activeQuestionStt = firstQuestion.stt;
               document.getElementById(`question-${firstQuestion.stt}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
               });
            }
         });
      },
   },
};
</script>

<style scoped>
.question-page {
   width: min(100%, 1280px);
   margin: 0 auto;
   color: #172033;
}

.page-header {
   display: flex;
   align-items: flex-end;
   justify-content: space-between;
   gap: 24px;
   padding: 28px;
   border: 1px solid #e2e8f0;
   border-radius: 18px;
   background: linear-gradient(135deg, #ffffff 0%, #f2f6ff 100%);
   box-shadow: 0 12px 32px rgba(23, 32, 51, 0.07);
}

.eyebrow {
   margin: 0 0 6px;
   color: #4056c7;
   font-size: 12px;
   font-weight: 700;
   letter-spacing: 0.12em;
   text-transform: uppercase;
}

.page-header h1 {
   margin: 0;
   color: #111b33;
   font-size: clamp(26px, 4vw, 38px);
   line-height: 1.2;
}

.page-description {
   margin: 8px 0 0;
   color: #64748b;
}

.search-box {
   display: grid;
   width: min(100%, 360px);
   gap: 7px;
   color: #475569;
   font-size: 13px;
   font-weight: 600;
}

.search-box input,
.page-size select {
   border: 1px solid #cbd5e1;
   border-radius: 10px;
   background: #ffffff;
   color: #172033;
   outline: none;
}

.search-box input {
   width: 100%;
   padding: 12px 14px;
   font-size: 15px;
}

.search-box input:focus,
.page-size select:focus {
   border-color: #4056c7;
   box-shadow: 0 0 0 3px rgba(64, 86, 199, 0.12);
}

.question-layout {
   display: grid;
   grid-template-columns: 260px minmax(0, 1fr);
   align-items: start;
   gap: 20px;
   margin-top: 24px;
}

.question-sidebar {
   position: sticky;
   top: 84px;
   max-height: calc(100vh - 108px);
   padding: 18px;
   border: 1px solid #e2e8f0;
   border-radius: 16px;
   background: #ffffff;
   box-shadow: 0 8px 24px rgba(23, 32, 51, 0.05);
   overflow-y: auto;
}

.sidebar-heading {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 12px;
}

.sidebar-heading p {
   margin: 0;
   color: #64748b;
   font-size: 12px;
}

.sidebar-heading .sidebar-title {
   margin-bottom: 3px;
   color: #172033;
   font-size: 15px;
   font-weight: 800;
}

.progress-percent {
   color: #4056c7;
   font-size: 13px;
   font-weight: 800;
}

.progress-track {
   height: 6px;
   margin: 14px 0 18px;
   border-radius: 999px;
   background: #e8ecf4;
   overflow: hidden;
}

.progress-track span {
   display: block;
   height: 100%;
   border-radius: inherit;
   background: #4056c7;
   transition: width 0.2s ease;
}

.answer-summary {
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 8px;
   margin-bottom: 18px;
}

.summary-item {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 8px;
   padding: 9px 10px;
   border-radius: 9px;
   font-size: 12px;
   font-weight: 700;
}

.summary-item strong {
   font-size: 17px;
   line-height: 1;
}

.summary-item.correct {
   background: #dcfce7;
   color: #166534;
}

.summary-item.wrong {
   background: #fee2e2;
   color: #991b1b;
}

.check-all-button {
   display: grid;
   width: 100%;
   gap: 2px;
   margin-bottom: 18px;
   padding: 10px 12px;
   border: 1px solid #4056c7;
   border-radius: 9px;
   background: #4056c7;
   color: #ffffff;
   font: inherit;
   font-size: 13px;
   font-weight: 800;
   text-align: center;
   cursor: pointer;
   transition: background 0.15s ease, border-color 0.15s ease;
}

.check-all-button small {
   font-size: 10px;
   font-weight: 600;
   opacity: 0.82;
}

.check-all-button:not(:disabled):hover {
   border-color: #2f419f;
   background: #2f419f;
}

.check-all-button:disabled {
   border-color: #d7dde8;
   background: #eef1f5;
   color: #98a3b3;
   cursor: not-allowed;
}

.question-grid {
   display: grid;
   grid-template-columns: repeat(5, minmax(0, 1fr));
   gap: 8px;
}

.question-grid button {
   display: grid;
   aspect-ratio: 1;
   place-items: center;
   padding: 0;
   border: 1px solid #dbe2ec;
   border-radius: 8px;
   background: #f8fafc;
   color: #526078;
   font: inherit;
   font-size: 12px;
   font-weight: 700;
   cursor: pointer;
   transition: transform 0.12s ease, border-color 0.12s ease, background 0.12s ease;
}

.question-grid button:hover {
   border-color: #4056c7;
   transform: translateY(-1px);
}

.question-grid button.answered {
   border-color: #7082db;
   background: #e9edff;
   color: #3347ad;
}

.question-grid button.correct {
   border-color: #52b77b;
   background: #dcfce7;
   color: #166534;
}

.question-grid button.wrong {
   border-color: #e27f7f;
   background: #fee2e2;
   color: #991b1b;
}

.question-grid button.active {
   outline: 3px solid rgba(64, 86, 199, 0.2);
   outline-offset: 1px;
}

.question-legend {
   display: flex;
   flex-wrap: wrap;
   gap: 8px 12px;
   margin-top: 18px;
   color: #64748b;
   font-size: 11px;
}

.question-legend span {
   display: inline-flex;
   align-items: center;
   gap: 5px;
}

.legend-dot {
   width: 9px;
   height: 9px;
   border-radius: 3px;
}

.legend-dot.answered {
   background: #7082db;
}

.legend-dot.correct {
   background: #52b77b;
}

.legend-dot.wrong {
   background: #e27f7f;
}

.question-content {
   min-width: 0;
}

.list-toolbar {
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 16px;
   margin: 0 0 14px;
   color: #64748b;
}

.list-toolbar p {
   margin: 0;
}

.page-size {
   display: flex;
   align-items: center;
   gap: 10px;
   font-size: 13px;
   font-weight: 600;
}

.page-size select {
   padding: 7px 28px 7px 10px;
}

.question-list {
   display: grid;
   gap: 16px;
}

.question-card {
   padding: 24px;
   border: 1px solid #e2e8f0;
   border-radius: 16px;
   background: #ffffff;
   box-shadow: 0 8px 24px rgba(23, 32, 51, 0.05);
   scroll-margin-top: 88px;
   transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.question-card.active {
   border-color: #8392dc;
   box-shadow: 0 10px 28px rgba(64, 86, 199, 0.12);
}

.question-heading {
   display: grid;
   grid-template-columns: auto 1fr;
   align-items: start;
   gap: 14px;
}

.question-number {
   padding: 5px 10px;
   border-radius: 999px;
   background: #e9edff;
   color: #3347ad;
   font-size: 12px;
   font-weight: 700;
   white-space: nowrap;
}

.question-heading h2 {
   margin: 1px 0 0;
   color: #172033;
   font-size: 17px;
   font-weight: 700;
   line-height: 1.55;
}

.answer-list {
   display: grid;
   grid-template-columns: repeat(2, minmax(0, 1fr));
   gap: 10px;
   margin: 20px 0;
   padding: 0;
   list-style: none;
}

.answer-list li {
   min-height: 48px;
   border: 1px solid #e2e8f0;
   border-radius: 10px;
   background: #f8fafc;
   color: #334155;
   line-height: 1.5;
   overflow: hidden;
   transition: border-color 0.15s ease, background 0.15s ease;
}

.answer-option {
   display: flex;
   align-items: flex-start;
   gap: 10px;
   width: 100%;
   min-height: 48px;
   padding: 12px;
   border: 0;
   background: transparent;
   color: inherit;
   font: inherit;
   text-align: left;
   cursor: pointer;
}

.answer-option:disabled {
   cursor: default;
   opacity: 1;
}

.answer-list li:not(.correct):not(.wrong) .answer-option:not(:disabled):hover {
   background: #f0f3ff;
}

.answer-list li.selected {
   border-color: #4056c7;
   background: #eef1ff;
}

.answer-list li.correct {
   border-color: #7ac99a;
   background: #ecfdf3;
   color: #14532d;
}

.answer-list li.wrong {
   border-color: #e69a9a;
   background: #fff1f1;
   color: #8f2020;
}

.answer-label {
   display: inline-grid;
   flex: 0 0 26px;
   width: 26px;
   height: 26px;
   place-items: center;
   border-radius: 7px;
   background: #e2e8f0;
   color: #334155;
   font-size: 12px;
   font-weight: 800;
}

.correct .answer-label {
   background: #22a35a;
   color: #ffffff;
}

.selected .answer-label {
   background: #4056c7;
   color: #ffffff;
}

.wrong .answer-label {
   background: #d94848;
   color: #ffffff;
}

.answer-text {
   flex: 1;
}

.answer-status {
   margin-left: auto;
   font-size: 12px;
   font-weight: 700;
   white-space: nowrap;
}

.correct-label {
   color: #178044;
}

.wrong-label {
   color: #b52b2b;
}

.question-actions {
   display: flex;
   align-items: center;
   gap: 14px;
}

.check-answer,
.retry-answer,
.pagination button {
   border: 1px solid #4056c7;
   border-radius: 9px;
   background: #ffffff;
   color: #3347ad;
   font: inherit;
   font-weight: 700;
   cursor: pointer;
}

.check-answer,
.retry-answer {
   flex: 0 0 auto;
   padding: 9px 14px;
}

.check-answer:not(:disabled):hover,
.retry-answer:hover,
.pagination button:not(:disabled):hover {
   background: #4056c7;
   color: #ffffff;
}

.check-answer:disabled {
   border-color: #d7dde8;
   color: #a3adbd;
   cursor: not-allowed;
}

.answer-result {
   flex: 1;
   margin: 0;
   padding: 10px 12px;
   border-radius: 9px;
   line-height: 1.45;
}

.answer-result strong {
   margin-right: 4px;
}

.answer-result.success {
   background: #ecfdf3;
   color: #166534;
}

.answer-result.error {
   background: #fff1f1;
   color: #991b1b;
}

.pagination {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 18px;
   padding: 28px 0 8px;
   color: #475569;
   font-weight: 600;
}

.pagination button {
   min-width: 112px;
   padding: 9px 13px;
}

.pagination button:disabled {
   border-color: #d7dde8;
   color: #a3adbd;
   cursor: not-allowed;
}

.empty-state {
   padding: 56px 24px;
   border: 1px dashed #cbd5e1;
   border-radius: 16px;
   background: #ffffff;
   text-align: center;
}

.empty-state h2 {
   margin: 0 0 8px;
   font-size: 20px;
}

.empty-state p {
   margin: 0;
   color: #64748b;
}

@media (max-width: 991px) {
   .question-layout {
      grid-template-columns: 1fr;
   }

   .question-sidebar {
      position: static;
      max-height: 340px;
   }

   .question-grid {
      grid-template-columns: repeat(10, minmax(0, 1fr));
   }
}

@media (max-width: 767px) {
   .page-header,
   .list-toolbar {
      align-items: stretch;
      flex-direction: column;
   }

   .search-box {
      width: 100%;
   }

   .page-size {
      justify-content: space-between;
   }

   .question-card {
      padding: 18px;
   }

   .question-grid {
      grid-template-columns: repeat(6, minmax(0, 1fr));
   }

   .question-heading {
      grid-template-columns: 1fr;
      gap: 9px;
   }

   .question-number {
      justify-self: start;
   }

   .answer-list {
      grid-template-columns: 1fr;
   }

   .answer-status {
      display: none;
   }

   .question-actions {
      align-items: stretch;
      flex-direction: column;
   }

   .check-answer,
   .retry-answer {
      align-self: flex-start;
   }

   .pagination {
      gap: 10px;
   }

   .pagination button {
      min-width: auto;
   }
}
</style>
