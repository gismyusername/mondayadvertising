<template>
  <div class="container">
    <div class="main-content-text">
      <span class="update">Last updated: October 2023</span>
      <h3>Privacy policy</h3>
      <p>
        Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
        ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
        duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
        integer in.
      </p>
      <p>
        Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada
        vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla
        sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
        At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi
        suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non
        rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris
        nibh.
      </p>

      <div class="gap-20"></div>

      <h3>What type of personal information do we collect?</h3>
      <p>
        Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
        ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
        duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
        integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor.
        Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet
        facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec
        volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa
        vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
        arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis
        iaculis mauris nibh.
      </p>

      <div class="gap-20"></div>

      <h3>How do we collect your personal data?</h3>
      <p>
        Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
        ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
        duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
        integer in.
      </p>
      <p>
        Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada
        vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla
        sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
        At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi
        suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non
        rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris
        nibh.
      </p>
      <ol>
        <li>
          Imperdiet ac semper quisque volutpat consectetur cursus non pretium
          pharetra.
        </li>
        <li>Nisl duis blandit dui imperdiet nec id integer.</li>
        <li>Quam nunc arcu nunc a lobortis convallis magnis dolor.</li>
        <li>
          Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
        </li>
      </ol>

      <div class="gap-20"></div>

      <h3>What are our legal bases for processing your data?</h3>
      <p>
        Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
        ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
        duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
        integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor.
        Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet
        facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec
        volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa
        vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum
        arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis
        iaculis mauris nibh.
      </p>

      <div class="gap-20"></div>

      <h3>Security</h3>
      <p>
        Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet
        ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl
        duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor
        integer in.
      </p>
      <p>
        Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada
        vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla
        sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.
        At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi
        suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non
        rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris
        nibh.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
};
</script>

<style lang="scss" scoped>
.main-content-text {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 15px;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 22px;
    font-weight: 600;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 18px;
  }
  .gap-20 {
    margin-bottom: 30px;
  }
  p {
    color: #687693;
  }
  ul {
    padding: 0;
    list-style-type: none;
    margin-bottom: 0;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 35px;
      &:last-child {
        margin-bottom: 0;
      }
      i {
        position: absolute;
        top: -6px;
        left: 0;
        color: ar(--mainColor);
        font-size: 25px;
      }
    }
  }
  ol {
    padding-left: 18px;
    color: var(--bodyColor);
    li {
      margin-bottom: 20px;
      color: var(--bodyColor);
      &::marker {
        color: ar(--mainColor);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  a {
    color: var(--mainColor);
    &:hover {
      text-decoration: underline;
    }
  }
  .content-gap-mb-20 {
    margin-bottom: 20px;
  }
  .content-gap-mb-30 {
    margin-bottom: 30px;
  }
  .update {
    display: block;
    margin-bottom: 30px;
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .main-content-text {
    h3 {
      font-size: 20px;
    }
  }
}
</style>