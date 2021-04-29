<template>
    <div>
        <h1>组件A1</h1>
    </div>
</template>
<script>
export default {
    name: "classA1",
    props: ['index','js','attrs'],
    watch:{
        attrs:{
            handler:function(v1,v2){
                if(v1){
                    v1.forEach(element => {
                        try{
                            if(eval(`'${element.value}' ${element.condition} '${element.realValue}'`)){
                                eval(element.function);
                                console.info(`'${element.value}' ${element.condition} '${element.realValue}' 条件成立`)
                            }
                        }catch(err){
                            console.error(err)
                        }
                    });
                }
            },
            deep: true,
            immediate: true
        }
    }
}
</script>