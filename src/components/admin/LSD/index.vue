<template>
   <QuestionBankView
      title="Lịch sử Đảng Cộng sản Việt Nam"
      :questions="questionBanks.LSD"
   />
</template>

<script>
import QuestionBankView from "../../QuestionBankView.vue";
import questionBanks from "../../../data/questions.json";

export default {
   name: "LsdQuestionView",
   components: {
      QuestionBankView,
   },
   data() {
      return {
         questionBanks,
      };
   },
};
</script>
