<template>
  <header id="Header" :class="{ 'open': header.open }" ref="header">
    <div class="container py-3 select-none">
      <div class="flex items-center h-8">
        <div id="logo" class="flex-1 justify-start">
          <img :src="logo" />
        </div>
        <div class="flex-1 flex-col items-center flex" :class="{ 'hidden': header.open, 'flex': !header.open  }">
          <span class="text-sm tracking-wide text-center text-white">Questions</span>
          <span class="text-xxs tracking-wide text-center text-blue-300 uppercase">
            Step {{ stepCurrent }} of {{ stepsTotal }}</span>
        </div>
        <div class="flex-1 flex justify-end">
          <a href="javascript:void(0)" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </a>
        </div>
      </div>
      <template v-if="header.open">
        <nav id="step-groups">
          <template v-for="(group, index) in $page.props.form.stepGroups">
            <div :disabled="groupIndex<index">
              <span>{{ group.name }}</span>
              <a href="javascript:void(0)">
                <span>{{ group.value }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </a>
            </div>
          </template>
        </nav>
      </template>
      <button @click="header.open=!header.open">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" :class="{ 'rotate-180': header.open }">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div id="progress" class="w-full bg-gray-200">
      <div :style="{ width: stepProgress+'%' }"></div>
    </div>
  </header>
  <div :style="{ height: header.height+'px' }"><!-- Floating Header Helper : Push The Content Down --></div>
  <div id="Header:Backdrop" v-if="header.open" @click="header.open=!header.open"></div>
</template>

<script>
export default {
  name: "Header",
  props: {
    team: Object,
    brand: Object,
  },
  data: () => ({
    header: {
      open: false,
      height: 0,
    }
  }),
  setup(props) {
    // TODO: Can This Go In Data Instead?
    const logo = Leadobo.setting('logo', props.brand.settings)

    return { logo }
  },
  mounted() {
    this.header.height = this.$refs.header.offsetHeight;
  },
  computed: {
    stepCurrent() {
      return this.$page.props.form?.progress?.stepIndex ?? 1
    },
    stepProgress() {
      return this.$page.props.form?.progress?.stepPercentage ?? (Math.round(1/(this.stepsTotal)*100))
    },
    stepsTotal() {
      return this.$page.props.form?.progress?.stepsTotal ?? this.$page.props.form?.stepsTotal ?? 1
    },
    groupIndex() {
      return this.$page.props.form?.progress?.stepGroupIndex ?? 0
    }
  }
}
</script>

<style lang="scss" scoped>
  header, #Header {
    @apply absolute inset-x-0 top-0 z-10 w-full;
  }
</style>
