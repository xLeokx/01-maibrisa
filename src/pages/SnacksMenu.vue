<template>
  <div class="container-fluid">
    <!--
    <div class="submitHeader"></div> -->
    <div class="row">
      <div class="col-12">
        <div class="claimSteps" id="stepOne">
          <router-link to="/"
            ><img
              style="position: absolute; left: 7px; top: 7px; width: 50px"
              src="~@/assets/backto.png"
              alt=""
          /></router-link>
          <img src="~@/assets/platos.png" class="claimStepNumber" alt="" />
          <p class="claimStepTitle">PLATOS</p>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="claimStepsProduct" id="">
          <div>
            <h5>Plato de jamon</h5>
            <span class="claimStepsProductDescription"
              >Plato de jamon con queso iberico y trozos de pan</span
            >
            <span class="claimStepsProductPrice">4€</span>
          </div>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="claimStepsProduct" id="">
          <div>
            <h5>Plato de jamon</h5>
            <span class="claimStepsProductDescription"
              >Plato de jamon con queso iberico y trozos de pan</span
            >
            <span class="claimStepsProductPrice">4€</span>
          </div>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="claimStepsProduct" id="">
          <div>
            <h5>Plato de jamon</h5>
            <span class="claimStepsProductDescription"
              >Plato de jamon con queso iberico y trozos de pan</span
            >
            <span class="claimStepsProductPrice">4€</span>
          </div>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="claimStepsProduct" id="">
          <div>
            <h5>Plato de jamon</h5>
            <span class="claimStepsProductDescription"
              >Plato de jamon con queso iberico y trozos de pan</span
            >
            <span class="claimStepsProductPrice">4€</span>
          </div>
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="claimStepsProduct" id="">
          <div>
            <h5>Plato de jamon</h5>
            <span class="claimStepsProductDescription"
              >Plato de jamon con queso iberico y trozos de pan</span
            >
            <span class="claimStepsProductPrice">4€</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nama: "snacks",
  data() {
    return {
      snacks:[
        {
        name:'Tabla Embutido',
        description:'Chorizo, Jamon Serrano, Lomo, Tomate, Pan',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      {
        name:'',
        description:'',
        price:'',
      },
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
.submitHeader {
  margin: 60px 0;
}
.submitHeader h1 {
  font-size: 26px;
}
.submitHeader p {
  font-size: 18px;
}
.claimSteps {
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.733);
  border: 1px solid #e2b053;
  border-radius: 15px;
  text-align: center;
  position: relative;
  margin: 0 auto;
  display: table;
}
.claimStepsProduct {
  width: 100%;
  background: rgba(255, 255, 255, 0.932);
  border: 1px solid #e2b053;
  border-radius: 15px;
  text-align: left;
  position: relative;
  margin: 0 auto;
  padding: 10px;
  display: table;
  font-weight: 400;
 
}
.claimStepNumber {
  margin-top: 40px;
  font-size: 38px;
  color: #444444;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  display: table-cell;
  left: 50%;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
}
.claimStepsProductPrice {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
}
.claimStepsProductDescription {
  font-size: small;
  position: relative;
  //top:-5px;
}
.claimStepTitle {
  color: #252525;
  font-family: cursive;
  font-weight: 400;
  font-size: 18px;
  margin-top: 110px;
}
.claimStepText {
  text-align: center;
  margin-left: 33.3%;
  width: 33.3%;
}
@media (min-width: 1200px) {
  .submitHeader {
    margin: 60px 40px;
  }
}
@media (max-width: 991px) {
  .claimSteps {
    margin: 10px auto;
  }
  .submitHeader {
    margin-top: 60px;
    margin-bottom: 0;
    text-align: center;
  }
}
</style>