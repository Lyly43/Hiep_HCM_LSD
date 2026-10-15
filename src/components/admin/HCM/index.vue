<template>
   <QuestionBankView title="Tư tưởng Hồ Chí Minh" :questions="questionBanks.HCM" />
</template>

<script>
import QuestionBankView from "../../QuestionBankView.vue";
import questionBanks from "../../../data/questions.json";

export default {
   name: "HcmQuestionView",
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
