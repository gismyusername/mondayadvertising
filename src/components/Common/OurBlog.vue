<template>
  <div class="pb-75">
    <div class="container">
      <div class="section-title">
        <span
          class="top-title"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
          >OUR BLOG</span
        >
        <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          Your path to paid search excellence starts here!
        </h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xl-4 col-md-6"
          v-for="blog in blogs"
          :key="blog.id"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="blog.dataDelay"
        >
          <div class="blog-single-item transition-y">
            <router-link
              to="/author"
              class="d-flex align-items-center text-decoration-none author"
            >
              <div class="flex-shrink-0">
                <img
                  :src="blog.authorImage"
                  class="rounded-circle"
                  alt="author"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <span>Posted by</span>
                <h6 class="mb-0">{{ blog.name }}</h6>
              </div>
            </router-link>
            <router-link to="/blog-details" class="d-block blog-img">
              <img :src="blog.image" alt="blog" />
            </router-link>
            <h3>
              <router-link to="/blog-details">
                {{ blog.title }}
              </router-link>
            </h3>
            <ul class="ps-0 mb-0 list-unstyled tags">
              <li>
                <router-link to="/blog-details">Paid Advert</router-link>
              </li>
              <li>
                <router-link to="/blog-details">Google Search</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurBlog",
  data() {
    return {
      blogs: [
        {
          id: 1,
          dataDelay: 200,
          authorImage: require("../../assets/images/author.png"),
          name: "Adli",
          image: require("../../assets/images/blog-1.jpg"),
          title: "Demystifying Paid Search Ads: A Beginner's Guide",
        },
        {
          id: 2,
          dataDelay: 300,
          authorImage: require("../../assets/images/author.png"),
          name: "Adli",
          image: require("../../assets/images/blog-2.jpg"),
          title: "The Art of Writing Compelling Ad Copy for Paid Search",
        },
        {
          id: 3,
          dataDelay: 400,
          authorImage: require("../../assets/images/author.png"),
          name: "Adli",
          image: require("../../assets/images/blog-3.jpg"),
          title:
            "Targeting Techniques: Reaching the Right Audience in Paid Search",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.blog-single-item {
  border-radius: 20px;
  background-color: #faf4f4;
  padding: 40px;
  margin-bottom: 25px;
  .author {
    margin-bottom: 35px;
    span {
      color: var(--bodyColor);
    }
  }
  .blog-img {
    margin-bottom: 30px;
    img {
      border-radius: 20px;
    }
  }
  h3 {
    margin-bottom: 20px;
    a {
      text-decoration: none;
      font-size: 22px;
      font-weight: 600;
      line-height: 32px;
      color: var(--headingColor);
    }
  }
  .tags {
    li {
      display: inline-block;
      margin-right: 12px;
      &:last-child {
        margin-right: 0;
      }
      a {
        border-radius: 100px;
        background-color: #fee;
        color: #4c4c4c;
        text-decoration: none;
        padding: 7px 20px;
        display: inline-block;
        &:hover {
          background-color: var(--mainColor);
          color: var(--whiteColor);
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .blog-single-item {
    padding: 20px;
    .author {
      margin-bottom: 15px;
    }
    .blog-img {
      margin-bottom: 15px;
    }
    h3 {
      margin-bottom: 15px;
      a {
        font-size: 20px;
        line-height: 30px;
      }
    }
    .tags {
      li {
        a {
          padding: 10px 10px;
        }
      }
    }
  }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .blog-single-item {
    padding: 20px;
    .author {
      margin-bottom: 15px;
    }
    .blog-img {
      margin-bottom: 15px;
    }
    h3 {
      margin-bottom: 15px;
      a {
        font-size: 20px;
        line-height: 30px;
      }
    }
    .tags {
      li {
        a {
          padding: 10px 10px;
        }
      }
    }
  }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .blog-single-item {
    .tags {
      li {
        a {
          padding: 7px 15px;
        }
      }
    }
  }
}
</style>