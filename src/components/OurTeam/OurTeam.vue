<template>
  <div class="ptb-100">
    <div class="container">
      <div class="section-title">
        <span class="top-title">OUR TEAM</span>
        <h2>Unstoppable Together: Our Team's Bond, Your Success Beyond</h2>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-4 col-md-6" v-for="team in teams" :key="team.id">
          <div class="team-single-team transition-y">
            <div class="position-relative z-1">
              <img class="team-img" :src="team.image" alt="team" />
              <ul class="ps-0 mb-0 list-unstyled social-link">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <img
                      src="../../assets/images/icon-facebook.png"
                      alt="icon-facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <img
                      src="../../assets/images/icon-linkedin.png"
                      alt="icon-linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <img
                      src="../../assets/images/icon-twitter.png"
                      alt="icon-twitter"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img
                      src="../../assets/images/icon-instagram.png"
                      alt="icon-instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div class="team-content">
              <h3>{{ team.name }}</h3>
              <span>{{ team.designation }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-style pb-75"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurTeam",
  data() {
    return {
      teams: [
        {
          id: 1,
          image: require("../../assets/images/team-1.jpg"),
          name: "Jammy Smith",
          designation: "CTO at HiBootstrap",
        },
        {
          id: 2,
          image: require("../../assets/images/team-2.jpg"),
          name: "Alika Maya",
          designation: "Marketing Manager",
        },
        {
          id: 3,
          image: require("../../assets/images/team-3.jpg"),
          name: "Harikane Lythe",
          designation: "Digital Marketing Lead",
        },
        {
          id: 4,
          image: require("../../assets/images/team-4.jpg"),
          name: "Alister Cook",
          designation: "Senior Marketing Officer",
        },
        {
          id: 5,
          image: require("../../assets/images/team-5.jpg"),
          name: "David Warner",
          designation: "Advertising Lead",
        },
        {
          id: 6,
          image: require("../../assets/images/team-6.jpg"),
          name: "Hanry Brook",
          designation: "Social Media Lead",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.team-single-team {
  border-radius: 20px;
  margin-right: 60px;
  margin-bottom: 25px;
  .team-img {
    border-radius: 20px;
    box-shadow: 60px 50px 0px #f2f2f8;
  }
  .team-content {
    padding: 20px 30px;
    background-color: #f2f2f8;
    margin-left: 60px;
    position: relative;
    z-index: 1;
    margin-right: -60px;
    border-radius: 20px;
    h3 {
      font-size: 22px;
      margin-bottom: 5px;
    }
  }
  .social-link {
    position: absolute;
    top: 50%;
    right: -46px;
    transform: translateY(-50%);
    li {
      margin-bottom: 15px;
      transition: var(--transition);

      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        transform: translateY(-3px);
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .team-single-team {
    .team-content {
      h3 {
        font-size: 20px;
        margin-bottom: 5px;
      }
      span {
        font-size: 15px;
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .team-single-team {
    .team-content {
      h3 {
        font-size: 20px;
        margin-bottom: 5px;
      }
      span {
        font-size: 15px;
      }
    }
  }
}
</style>