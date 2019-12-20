export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_zluBugAejmlCD1BBmt2OYzjX00k6eWz1M1",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-uploads-90"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://hh705s4vqh.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_NqsH3wr7Q",
    APP_CLIENT_ID: "7o8iv9s6hf4l1ne72bss0vmh93",
    IDENTITY_POOL_ID: "us-west-2:7b335a80-10e6-47a8-beb6-dd1aab2ec209"
  }
};