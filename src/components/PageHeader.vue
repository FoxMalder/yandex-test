<template>
  <header class="page-header">
    <div class="page-header__inner">
      <a href="/" class="page-header__link">
        <img class="page-header__logo" src="../../static/img/logo.svg"
             alt="Yandex Переговорки" width="175" height="26">
      </a>
      <button class="page-header__btn page-header__btn--hidden btn"
              type="button"
              @click="openNewEventModal"
              title="Открыть попап"
      >Создать встречу</button>
    </div>
    <calendar></calendar>
  </header>
</template>

<script>
  import Calendar from './Calendar';

  export default {
    name: 'PageHeader',
    components: {
      Calendar,
    },
    methods: {
      openNewEventModal() {
        this.$store.commit('setCurrentTheme', null);
        this.$store.commit('setCurrentRoom', null);
        this.$store.commit('setEndTime', null);
        this.$store.commit('setStartTime', null);
        this.$store.commit('setCurrentFloor', null);
        this.$store.commit('clearSelectedMembers');
        this.$store.commit('setNewEventModal', true);
      },
    },
  };
</script>

<style lang="less">
  @import '../assets/btn';

  .page-header {
    position: fixed;
    width: 100%;
    background-color: #ffffff;
    z-index: 10;

    &__inner {
      padding: 13px 20px 9px 20px;
      box-shadow: 0 1px 0 0 #e9ecef;
    }

    &__link {
      display: block;
    }

    &__btn {
      cursor: pointer;

      &--hidden {
        display: none;
      }

      &--disabled {
        background-color: #E9ECEF;
        color: rgba(0, 0, 0, 0.2);
        cursor: not-allowed;
        pointer-events: none;
      }
    }

    @media (min-width: 1366px) {
      position: initial;

      &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 24px 11px 24px;
      }

      &__btn {
        &--hidden {
          display: block;
        }
      }
    }
  }
</style>
