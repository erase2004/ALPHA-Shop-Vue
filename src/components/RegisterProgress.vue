<template>
  <section class="progress-container col col-12">
    <span
      :class="['progress-group', 'special', getClass(isPassed('address'))]"
    >
      <span class="progress-icon">
        <icon
          icon-class="icon"
          icon-name="pg-complete"
        />
        <span class="text">1</span>
      </span>
      <span class="progress-label">寄送地址</span>
    </span>
    <span
      :class="['progress-bar', getClass(isPassed('address'))]"
    />
    <span
      :class="['progress-group', getClass(isPassed('shipping'))]"
    >
      <span class="progress-icon">
        <icon
          icon-class="icon"
          icon-name="pg-complete"
        />
        <span class="text">2</span>
      </span>
      <span class="progress-label">運送方式</span>
    </span>
    <span
      :class="['progress-bar', getClass(isPassed('shipping'))]"
    />
    <span
      :class="['progress-group', getClass(isPassed('payment'))]"
    >
      <span class="progress-icon">
        <icon
          icon-class="icon"
          icon-name="pg-complete"
        />
        <span class="text">3</span>
      </span>
      <span class="progress-label">付款資訊</span>
    </span>
  </section>
</template>

<script>

const pageOrder = {
  address: 1,
  shipping: 2,
  payment: 3
}

export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },
  methods: {
    isPassed (inputPage) {
      const thisPageOrder = pageOrder[this.page]
      const inputPageOrder = pageOrder[inputPage]

      return (thisPageOrder > inputPageOrder) ? 1 : ((thisPageOrder === inputPageOrder) ? 0 : -1)
    },
    getClass (isPassed) {
      if (isPassed === 1) {
        return 'done'
      } else if (isPassed === 0) {
        return 'current'
      } else {
        return 'undone'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
%done-phase {
    .icon {
        display: inline-block;
    }
    .text {
        display: none;
    }
}
%undone-phase {
    .icon {
        display: none;
    }
    .text {
        display: inline-block;
    }
}
%current-text {
    color: var(--progress-current-color);
}
%current-icon {
    @extend %current-text;
    background-color: transparent;
    border: 1px solid var(--progress-current-color);
    @extend %undone-phase;
}
%undone-text {
    color: var(--progress-undone-color);
}
%undone-icon {
    @extend %undone-text;
    background-color: transparent;
    border: 1px solid var(--progress-undone-color);
    @extend %undone-phase;
}
%done-text {
    @extend %current-text;
}
%done-icon {
    color: var(--progress-done-color);
    background-color: transparent;
    @extend %done-phase;
}

section.progress-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;

  .progress-bar {
      display: flex;
      flex-grow: 1;
      max-width: 60px;
      height: 1px;
      margin: 0px 8px;
      border-width: 2px;
      border-style: solid;

      &.current, &.done {
        border-color: var(--done-progress-border);
      }
      &.undone {
        border-color: var(--undone-progress-border);
      }
  }

  .progress-group {
    display: flex;

    .progress-icon {
      display: inline-block;
      position: relative;
      width: 24px;
      height: 24px;
      margin-right: 8px;
      border-radius: 50%;

      .text {
        width: inherit;
        height: inherit;
        position: absolute;
        top: 0px;
        font-size: 12px;
        font-weight: 700;
        line-height: 24px;
        text-align: center;
        color: inherit;
      }
      .icon {
        width: inherit;
        height: inherit;
      }
    }
    .progress-label {
      font-weight: 400;
      line-height: 24px;
      color: var(--main-text);
    }

    &.undone {
      .progress-icon {
        @extend %undone-icon;
      }
      .progress-label {
        @extend %undone-text;
      }
    }
    &.current {
      .progress-icon {
        @extend %current-icon;
      }
      .progress-label {
        @extend %current-text;
      }
    }
    &.done {
      .progress-icon {
        @extend %done-icon;
      }
      .progress-label {
        @extend %done-text;
      }
    }
    &.special {
      .progress-icon {
        background-color: var(--pg-addr-bg-color);
        border-color: var(--pg-addr-bg-color);
        .text {
            color: var(--pg-addr-color);
        }
      }
    }
  }
}
</style>
