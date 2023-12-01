import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getJobs } from '../services/JobsService';

export const useJobStore = defineStore('jobs', () => {
    const jobList = ref([]);
    const showNewJobs = ref(false);

    async function fetchJobs() {
        const { data } = await getJobs();
        jobList.value = data.records.reverse();
        console.log(jobList)
    }
    const newJobs = computed(() => {
        // new Date(Date.now() - 1 * 60 * 60 * 1000);
        const date1HourAgo = new Date(Date.now() - 1 * 60 * 60 * 1000);
        return showNewJobs.value ? jobList.value.filter(job => new Date(job.createdAt) > date1HourAgo) : jobList.value;
    });
    //   const filterInterviewer = computed(() =>
    //   schedules.value.filter((user) => user.role == 'Interviewer')
    //   );

    return { jobList, fetchJobs, newJobs, showNewJobs };
});
