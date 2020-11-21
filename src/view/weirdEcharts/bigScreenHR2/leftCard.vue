<template>
  <div class="topCard border-show">
    <div class="left-title">人事信息</div>
    <div class="card-item">
      <div class="item-content">
        <div class="item-desc">{{ sourceData.duringjob.descprition }}</div>
        <div class="item-num" style="color:#f65656">
          {{ sourceData.duringjob.total
          }}<span
            style="    font-size: 0.4em;
    color: black;"
            >人</span
          >
        </div>
      </div>
      <div class="item-btn"></div>
    </div>

    <div class="card-item">
      <template v-for="item in sourceData.intoJob">
        <div
          class="item-content"
          :key="item.descprition+item.type"
          v-show="item.type == inJobShow"
        >
          <div class="item-desc">{{ item.descprition }}</div>
          <div class="item-num" style="color:#2ec18a">
            {{ item.total
            }}<span
              style="    font-size: 0.4em;
    color: black;"
              >人</span
            >
          </div>
        </div>
      </template>
      <div class="item-btn">
        <a-radio-group
          default-value="month"
          button-style="solid"
          v-model="inJobShow"
          size="small"
        >
          <a-radio-button value="month">
            月
          </a-radio-button>
          <a-radio-button value="year">
            年
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <div class="card-item">
      <template v-for="item in sourceData.outJob">
        <div
          class="item-content"
          :key="item.descprition+item.type"
          v-show="item.type == outJobShow"
        >
          <div class="item-desc">{{ item.descprition }}</div>
          <div class="item-num" style="color:#2d7af5">
            {{ item.total
            }}<span
              style="font-size: 0.4em;
    color: black;"
              >人</span
            >
          </div>
        </div>
      </template>
      <div class="item-btn">
        <a-radio-group
          default-value="month"
          button-style="solid"
          v-model="outJobShow"
          size="small"
        >
          <a-radio-button value="month">
            月
          </a-radio-button>
          <a-radio-button value="year">
            年
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import "./localCss.css";
export default {
  data() {
    return {
      inJobShow: "month",
      outJobShow: "month",
      sourceData: {
        duringjob: {
          descprition: "在职:",
          total: "5620"
        },
        intoJob: [
          {
            descprition: "入职:",
            total: "22",
            type: "month"
          },
          {
            descprition: "入职:",
            total: "12",
            type: "year"
          }
        ],
        outJob: [
          {
            descprition: "离职:",
            total: "25",
            type: "month"
          },
          {
            descprition: "离职:",
            total: "12",
            type: "year"
          }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.topCard {
    overflow: hidden;
  .left-title {
    width: 100%;
    height: 8%;
    font-size: 0.8em;
    font-weight: 900;
    background-color: #ffffffea;
    border-bottom: 1px solid #d8d6d6;
    padding: 2% 5%;
  }
  .card-item {
    height: 31.5%;
    border-bottom: 1px solid #d8d6d6;
    background-color: #ffffffea;
    overflow: hidden;
    .item-content {
      display: block;
      width: 70%;
      height: 100%;
      float: left;
      .item-num {
        float: left;
        font-size: 2.5em;
        font-weight: 500;
        line-height: 3.3em;
        color: black;
        height: 100%;
        width: 54%;
      }
      .item-desc {
        float: left;
        font-size: 0.9em;
        font-weight: 500;
        line-height: 1em;
        height: 100%;
        width: 44%;
        padding: 24% 0% 0% 24%;
      }
    }
    .item-btn {
      width: 30%;
      height: 60%;
      float: left;
      text-align: center;
      padding: 5% 0%;
    }
  }
}
</style>
