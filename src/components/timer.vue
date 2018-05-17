<template>
<div>
    {{time}}
</div>
</template>

<script>
   export default{
       data () {
           return {
               time : '',
               flag : false
           }

       },
       mounted () {
           let time = setInterval(()=>{
               if(this.flag == true){
                   clearInterval(time)
               }
               this.timeDown()
           },1000)
       },
       props : {
           endTime : {
               type : String
           }
       },
       methods : {
        timeDown(){
            const endTime = this.endTime;
            const nowTime = new Date();
            let time1 = new Date("2020/2/4").getTime();
            let time2 = new Date().getTime();
            let timer = time1 - time2;
            let day = this.formate(parseInt(timer / 86400000));
            let hour = this.formate(parseInt((timer % 86400000) / 3600000));
            let minute = this.formate(parseInt((timer % 86400000 % 3600000 / 60000)));
            let seconds = this.formate(parseInt((timer % 86400000 % 3600000 % 60000 / 1000)));
            if(timer <= 0){
                this.flag = true
            }
            this.time = `${day}天${hour}时${minute}分${seconds}秒`
        },
        formate (time) {
            if(time>=10){
                return time
            }else{
                return `0${time}`
            }
        }
    }
   }
</script>