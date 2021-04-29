<template>
    <div>
        <h1>这是一个列表组件</h1>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <span>{{index}}</span>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "customList",
    props: ['list']
}
</script>