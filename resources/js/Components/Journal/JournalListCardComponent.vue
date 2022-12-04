<template>
    <div class="issue-card">
        <span class="issue-card-title">{{ title }} </span>
        <span>{{ author }}</span>
        <div class="issue-stats">
            <div class="issue-stat-left">
                <span>{{ tag }}</span>
                <span>{{ volume }}</span>
                <span> {{ issue }}</span>
                <span> {{ page }} </span>
            </div>
            <div class="issue-stat-right">
                <span>{{ downloads }} </span>
                <span>{{ views }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "author", "tag", "volume", "issue", "page", "downloads", "views"]
}
</script>

<style scoped>
.issue-card {
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 10px 20px;
    gap: 5px;
}

.issue-stats {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 90px;
}

.issue-stat-left,
.issue-stat-right {
    display: flex;
    gap: 30px;
}

.issue-stat-left span,
.issue-stat-right span {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
}

.issue-card-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 204%;

    color: #587135;
}
</style>