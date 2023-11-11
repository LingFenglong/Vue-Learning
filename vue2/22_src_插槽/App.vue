<template>
<!--  <div class="container">-->
<!--    <Category title="美食分类" :itemList="foods"></Category>-->
<!--    <Category title="游戏分类" :itemList="games"></Category>-->
<!--    <Category title="电影分类" :itemList="films"></Category>-->
<!--  </div>-->

<!--  <div class="container">-->
<!--    <CategorySlot1 title="美食分类">-->
<!--      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="haha">-->
<!--    </CategorySlot1>-->
<!--    <CategorySlot1 title="游戏分类">-->
<!--      <ul>-->
<!--        <li v-for="(item, index) in itemList" :key="index">{{item}}</li>-->
<!--      </ul>-->
<!--    </CategorySlot1>-->
<!--    <CategorySlot1 title="电影分类">-->
<!--      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>-->
<!--    </CategorySlot1>-->
<!--  </div>-->

<!--  <div class="container">-->
<!--    <CategorySlot2 title="美食分类">-->
<!--      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="haha">-->
<!--      <ul slot="footer">-->
<!--        <li v-for="(item, index) in foods" :key="index">{{item}}</li>-->
<!--      </ul>-->
<!--    </CategorySlot2>-->

<!--    <CategorySlot2 title="游戏分类">-->
<!--      <ul slot="center">-->
<!--        <li v-for="(item, index) in games" :key="index">{{item}}</li>-->
<!--      </ul>-->
<!--    </CategorySlot2>-->

<!--    <CategorySlot2 title="电影分类">-->
<!--      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>-->
<!--      <ul slot="footer">-->
<!--        <li v-for="(item, index) in films" :key="index">{{item}}</li>-->
<!--      </ul>-->
<!--    </CategorySlot2>-->
<!--  </div>-->

  <div class="container">
    <CategorySlot3 title="美食分类">
      <template slot-scope="{games}">
        <ul>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ul>
      </template>
    </CategorySlot3>

    <CategorySlot3 title="游戏分类">
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
    </CategorySlot3>

    <CategorySlot3 title="电影分类">
      <template scope="{games}">
        <h3 v-for="(item, index) in games" :key="index">{{item}}</h3>
      </template>
    </CategorySlot3>
  </div>
</template>

<script>
  import Category from "@/components/Category";
  import CategorySlot1 from "@/components/CategorySlot1";
  import CategorySlot2 from "@/components/CategorySlot2";
  import CategorySlot3 from "@/components/CategorySlot3";

  export default {
    name: 'App',
    components: {
      Category,
      CategorySlot1,
      CategorySlot2,
      CategorySlot3
    },
    data() {
      return {
        // foods:['火锅','烧烤','小龙虾','牛排'],
        // games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        // films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    }
  }
</script>

<style>
   .container {
     display: flex;
     justify-content: space-around;
   }

   img {
     width: 100%;
   }

   video {
     width: 100%;
   }
</style>