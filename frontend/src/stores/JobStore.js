import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import { getJobs } from '../services/JobsService';

export const useJobStore = defineStore('jobs', () => {
    const jobList = ref([]);
    const filterqueries = ref({});
    const hasNextPage = ref(true);
    async function fetchJobs(param) {
        const { data } = await getJobs(param);
        jobList.value = data.records
        hasNextPage.value = data.currentPage < data.pages;
    }
    const setFilterQueries = (query) => {
        filterqueries.value = { ...filterqueries.value, ...query };
    }
    const clearFilters = () => {
        filterqueries.value = {};
    }

    return { jobList, hasNextPage, filterqueries, fetchJobs, setFilterQueries, clearFilters };

});
