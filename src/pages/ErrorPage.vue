<template>
  <div class="bg-gerund-color pt-227 pb-100">
    <div class="container">
      <div class="row">
        <div class="error-content text-center">
          <h1>4<span>0</span>4</h1>
          <h3>Oops! page is not found</h3>
          <p>Sorry, but the page you are looking for does not exist.</p>
          <router-link to="/" class="default-btn btn-rounded-0">
            Back To Homepage
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error-content {
  h1 {
    font-size: 400px;
    line-height: 1;
    margin-top: -40px;
    color: var(--mainColor);
    span {
      color: rgba(252, 239, 150, 0.5);
      -webkit-text-stroke: 1px #808cff;
      user-select: none;
    }
  }
  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }
  p {
    margin-bottom: 30px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .error-content {
    h1 {
      font-size: 100px;
      margin-top: 0;
    }
    h3 {
      font-size: 20px;
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .error-content {
    h1 {
      font-size: 150px;
      margin-top: 0;
    }
    h3 {
      font-size: 20px;
    }
  }
}
</style>