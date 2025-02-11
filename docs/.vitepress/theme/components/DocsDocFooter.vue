<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import { useEditLink } from 'vitepress/dist/client/theme-default/composables/edit-link'
import { usePrevNext as useVPPrevNext } from 'vitepress/dist/client/theme-default/composables/prev-next'
import { usePrevNext } from '../composables/prev-next'

import VPIconEdit from 'vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPDocFooterLastUpdated from 'vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue'

const route = useRoute()

const { theme, page, frontmatter } = useData()

const editLink = useEditLink()
const control = computed(() => (route.path.includes('/components/') ? usePrevNext() : useVPPrevNext()).value)

const hasEditLink = computed(() => {
  return theme.value.editLink && frontmatter.value.editLink !== false
})
const hasLastUpdated = computed(() => {
  return page.value.lastUpdated && frontmatter.value.lastUpdated !== false
})
const showFooter = computed(() => {
  return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
})
</script>

<template>
  <footer v-if="showFooter" class="VPDocFooter">
    <slot name="doc-footer-before" />

    <div v-if="hasEditLink || hasLastUpdated" class="edit-info">
      <div v-if="hasEditLink" class="edit-link">
        <VPLink class="edit-link-button" :href="editLink.url" :no-icon="true">
          <VPIconEdit class="edit-link-icon" aria-label="edit icon"/>
          {{ editLink.text }}
        </VPLink>
      </div>

      <div v-if="hasLastUpdated" class="last-updated">
        <VPDocFooterLastUpdated />
      </div>
    </div>

    <div v-if="control.prev?.link || control.next?.link" class="prev-next">
      <div class="pager">
        <a v-if="control.prev?.link" class="pager-link prev" :href="normalizeLink(control.prev.link)">
          <span class="desc" v-html="theme.docFooter?.prev || 'Previous page'"></span>
          <span class="title" v-html="control.prev.text"></span>
        </a>
      </div>
      <div class="pager" :class="{ 'has-prev': control.prev?.link }">
        <a v-if="control.next?.link" class="pager-link next" :href="normalizeLink(control.next.link)">
          <span class="desc" v-html="theme.docFooter?.next || 'Next page'"></span>
          <span class="title" v-html="control.next.text"></span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.VPDocFooter {
  margin-top: 64px;
}

.edit-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 18px;
}

@media (min-width: 640px) {
  .edit-info {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
  }
}

.edit-link-button {
  display: flex;
  align-items: center;
  border: 0;
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}

@media screen and (max-width: 1024px) {
  .edit-link-button {
    align-items: start;
  }

  :deep(.VPLastUpdated) {
    line-height: normal;
  }
}

.edit-link-button:hover {
  color: var(--vp-c-brand-dark);
}

.edit-link-icon {
  margin-right: 8px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.prev-next {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 24px;
}

@media (min-width: 640px) {
  .prev-next {
    display: flex;
  }
}

.pager.has-prev {
  padding-top: 8px;
}

@media (min-width: 640px) {
  .pager {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 50%;
  }

  .pager.has-prev {
    padding-top: 0;
    padding-left: 16px;
  }
}

.pager-link {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 11px 16px 13px;
  width: 100%;
  height: 100%;
  transition: border-color 0.25s;
}

.pager-link:hover {
  border-color: var(--vp-c-brand);
}

.pager-link.next {
  margin-left: auto;
  text-align: right;
}

.desc {
  display: block;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.title {
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}
</style>
