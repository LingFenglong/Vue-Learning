<template>
  <div id="root">
    <Test1/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
import Test1 from "@/components/Test1";
import Test2 from "@/components/Test2";
import Test3 from "@/components/Test3";

export default {
  name: "App",
  components: {
    Test1,
    Test2,
    Test3
  }
}
</script>

<style>
.hello {
  color: white;
  background-color: orange;
  padding: 4px;
  display: inline-block;
}
</style>