<template>
  <div class="container">
    <div class="blog-single-item top-single-blog bg-white">
      <div class="d-lg-flex align-items-center">
        <div class="flex-grow-1 me-lg-3">
          <router-link
            to="/blog-details"
            class="d-flex align-items-center text-decoration-none author"
          >
            <div class="flex-shrink-0">
              <img
                src="../../assets/images/author.png"
                class="rounded-circle"
                alt="author"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <span>Posted by</span>
              <h6 class="mb-0">Adli</h6>
            </div>
          </router-link>
          <ul class="ps-0 mb-0 list-unstyled tags">
            <li>
              <router-link to="/blog-details">Paid Advert</router-link>
            </li>
            <li>
              <router-link to="/blog-details">Google Search</router-link>
            </li>
          </ul>
          <h3>
            <router-link to="/blog-details">
              Demystifying Paid Search Ads: A Beginner's Guide
            </router-link>
          </h3>
          <router-link to="/blog-details" class="read-more">
            READ MORE
            <img
              src="../../assets/images/icon-right-red.png"
              alt="icon-right-red"
            />
          </router-link>
        </div>

        <div class="flex-shrink-0 mt-4 mt-lg-0 text-center">
          <router-link to="/blog-details" class="d-block blog-img mb-0">
            <img src="../../assets/images/blog-4.jpg" alt="blog" />
          </router-link>
        </div>
      </div>
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
        <div class="blog-single-item transition-y bg-white">
          <router-link
            to="/blog-details"
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
              <h6 class="mb-0">{{ blog.authorName }}</h6>
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
            <li v-for="tag in blog.tags" :key="tag.id">
              <router-link to="/blog-details">
                {{ tag.tag }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="pagination-area text-center">
          <a href="#" class="next page-numbers">
            <img
              src="../../assets/images/icon-left-red.png"
              alt="arrow-right-2"
            />
          </a>

          <span class="page-numbers current" aria-current="page">1</span>
          <a href="#" class="page-numbers">2</a>
          <a href="#" class="page-numbers">3</a>

          <a href="#" class="next page-numbers">
            <img
              src="../../assets/images/icon-right-red.png"
              alt="arrow-right"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogContent",
  data() {
    return {
      blogs: [
        {
          id: 1,
          dataDelay: 200,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-1.jpg"),
          title: "Demystifying Paid Search Ads: A Beginner's Guide",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 2,
          dataDelay: 300,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-2.jpg"),
          title: "The Art of Writing Compelling Ad Copy for Paid Search",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 3,
          dataDelay: 400,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-3.jpg"),
          title:
            "Targeting Techniques: Reaching the Right Audience in Paid Search",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 4,
          dataDelay: 200,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-11.jpg"),
          title: "Comprehensive Update News Coverage",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 5,
          dataDelay: 300,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-12.jpg"),
          title: "5 Resasons To Purchase Desktop Computer",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 6,
          dataDelay: 400,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-13.jpg"),
          title: "Hosts Can’t Contain On Their Dismaye",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 7,
          dataDelay: 200,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-14.jpg"),
          title: "Our Experience At WordCamp In New York",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 8,
          dataDelay: 300,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-15.jpg"),
          title: "Event Recap: Careers open Source & Beyond",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
        },
        {
          id: 9,
          dataDelay: 400,
          authorImage: require("../../assets/images/author.png"),
          authorName: "Adli",
          image: require("../../assets/images/blog-16.jpg"),
          title: "Speaking Remotely At WordCamp US.",
          tags: [
            {
              id: 1,
              tag: "Paid Advert",
            },
            {
              id: 2,
              tag: "Google Search",
            },
          ],
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
        padding: 12px 20px;
        display: inline-block;
        &:hover {
          background-color: var(--mainColor);
          color: var(--whiteColor);
        }
      }
    }
  }
  &.top-single-blog {
    padding: 43px 65px;
    .tags {
      margin-bottom: 26px !important;
    }
    h3 {
      margin-bottom: 45px;
      a {
        font-size: 36px;
        line-height: 48px;
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
    &.top-single-blog {
      padding: 20px;
      .tags {
        margin-bottom: 10px !important;
      }
      h3 {
        margin-bottom: 20px;
        a {
          font-size: 25px;
          line-height: normal;
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
    &.top-single-blog {
      padding: 50px;
      .tags {
        margin-bottom: 10px !important;
      }
      h3 {
        margin-bottom: 20px;
        a {
          font-size: 30px;
          line-height: normal;
        }
      }
    }
  }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .blog-single-item {
    &.top-single-blog {
      padding: 30px;
      .tags {
        margin-bottom: 10px !important;
      }
      h3 {
        margin-bottom: 20px;
        a {
          font-size: 30px;
          line-height: normal;
        }
      }
    }
  }
}
</style>