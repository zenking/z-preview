<template>
  <div :info-data="info" class="weekly">
    <div class="contentX">
      <div class="header" >
        <div class="title-wrap">
          <p class="title">{{ infoData.name }} </p>
          <p class="number">{{ infoData.edition }}期</p>
        </div>
        <div class="slogan">
          <img class="daoyu" src="/static/img/daoyu.png" >
          <div class="text">{{ infoData.introduction }}</div>
        </div>
      </div>
      <div v-for="(item,index) in infoData.bgUrls" :key="index" class="imgwrap">
        <img :src="item" class="weekly-img">
      </div>
      <div v-if="infoData.bgUrls.length" class="push-goods-wrap">
        <div class="push-title-wrap">
          <span class="push-title">优选单品</span>
        </div>
        <div class="goods-list">
          <div v-for="(item,index) in infoData.goodsList" :key="index" class="goods-item">
            <div class="item-imgwrap">
              <!-- <img src="/static/img/avt.png" alt="商品图片"> -->
              <img :src="item.goodsImg" alt="商品图片">
              <div class="item-detail">
                <div class="item-title">{{ item.goodsTitle }}</div>
                <div class="item-price">
                  <span class="real-price"> <i class="mark">￥</i>{{ item.discountedPrice }}</span>
                  <span class="price"><i class="mark">￥</i>{{ item.originalPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="infoData.journalList.length" class="push-goods-wrap past">
        <div class="push-title-wrap">
          <span class="push-title">往期回顾</span>
        </div>
        <div class="past-weekly-list">
          <div class="weekly-item-wrap">
            <div v-for="(item,index) in infoData.journalList" :key="index" class="weekly-item">
              <img :src="item.coverUrl" alt="周刊封面" class="cover">
              <div class="detail">
                <div class="weekly-header">
                  <div class="title">{{ item.name }}</div>
                  <div class="number">{{ item.edition }}期</div>
                </div>
                <div class="content">
                  <div class="theme">{{ item.Introduction }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ZPreview',
  props: {
    infoData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      styleObject: {
        backgroundImage: 'url(/static/img/weekly-bg.png)',
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundColor: '#000',
        width: '100%'
      },
      info: {
        bgUrls: [],
        goodsList: [],
        journalList: []
      }
    }
  },
  watch: {
    $route() {
      // 监听数据更新
      this.getUpdate()
    }
  },
  created() {
    this.getUpdate()
  },
  methods: {
    getUpdate() {
      // 数据更新
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.contentX{
  width: 100%;
  height:100% ;
  overflow: scroll;
  position: relative;
  .header{
    width: 100%;
    padding-left: 20px;
    padding-top: 80px;
    box-sizing: border-box;
    position: absolute;
    overflow: hidden;
    color:#fff;
    .title-wrap{
      width: 300px;
      margin-bottom: 15px;
      overflow: hidden;
      box-sizing: border-box;
      // border-bottom:1px solid rgba(255,255,255,0.1);
      position:relative;
      &::after{
        content: '';
        width: 105px;
        height: 1px;
        border-bottom:1px solid rgba(255,255,255,0.1);
        position: absolute;
        bottom: 0;
        left: 0;
      }
      p{
      margin: 0;
      padding: 0;
    }
      .title{
        font-size: 26px;
        line-height: 30px;
      }
      .number{
        font-size: 10.5px;
        line-height: 13px;
        margin-bottom: 15px;
      }
    }

    .slogan{
      font-size:12.5px;
      line-height: 17px;
      max-width: 238px;
      display: flex;
      position: relative;
      .daoyu{
        width: 32px;
        height: 17px;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
      }
      .text{
        display: inline-block;
        flex: 1;
        text-indent: 35px;
        line-height: 20px;
      }
    }
  }
  .weekly-img{
    width: 100%;
  }
  .push-goods-wrap{
    width: 100%;
    padding: 0 21px;
    padding-bottom: 15px;
    background: #fafbfc;
    box-sizing: border-box;
    .push-title-wrap{
      text-align: center;
      height: 74px;
      line-height: 74px;

       .push-title{
         font-size: 21px;
          color:#3c3d3d;
          position: relative;
          display: inline-block;
          &::before{
            content: '';
            width: 58px;
            height: 1px;
            background:#000;
            // background:rgba(255,255,255,0.2);
            position: absolute;
            top: 36.5px;
            left: -65px;
          }
          &::after{
            content: '';
            width: 58px;
            height: 1px;
            background:#000;
            // background:rgba(255,255,255,0.2);
            position: absolute;
            top: 36.5px;
            right: -65px;
          }
       }

    }
    .goods-list{
      width: 100%;
      // display: flex;
      // overflow: hidden;
      .goods-item{
        width: 49%;
        // flex: 1;
        background:#fff;
        margin-bottom: 8px;
        border-radius: 4px;
        display: inline-block;
        // overflow: hidden;
        &:nth-last-child(1), &:nth-last-child(2){
           margin-bottom: 0px;
        }
        &:nth-child(odd) {
          margin-right: 2%;
         }
        .item-imgwrap{
          width: 100%;
          padding: 2px;
          box-sizing: border-box;
          box-shadow:1px 1px 5px #333333;
          img{
            display: block;
            width: 100%;
          }
          .item-detail{
            padding: 12px 12px 0;
            box-sizing: border-box;
            .item-title{
              color:#3c3d3d;
              font-size: 12.5px;
              // text-align: justify;
              // text-align-last: justify;
            }
            .item-price{
              border-top: 1px solid rgba(#000000,  0.08);
              font-weight: bold;
              min-width: 74px;
              max-width: 90px;
              margin-top: 10px;
              line-height: 36px;
              .real-price{
                color:#3c3d3d;
                font-size: 15px;
                .mark{
                  font-size: 11.5px;
                  padding: 0;
                  font-style: normal;
                }
              }
              .price{
                font-size: 11.5px;
                color:#cfd0d1;
                text-decoration: line-through;
                .mark{
                  padding: 0;
                  font-style: normal;
                }
              }
            }
          }
        }

      }
    }
  }
  .past{
    background:#fff;
    .past-weekly-list{
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      .weekly-item-wrap{
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        background: #1f8960;
        .weekly-item{
          display: flex;
          .cover{
            width: 135px;
            height: 135px;
            display: inline-block;
            margin: 0;
          }
          .detail{
            flex: 1;
            position: relative;
            .weekly-header{
              width: 106px;
              height: 47px;
              padding-left: 20px;
              padding-top: 7px;
              box-sizing: border-box;
              background: rgba(#000000,  0.4);
              position: absolute;
              top: 16px;
              left: -10px;
              text-align: left;;
              color: #fff;
              .title{
                font-size: 18.5px;
              }
              .number{
                font-size: 10px;
                line-height: 13px;
              }
            }
            .content{
              font-size:13px;
              line-height: 17px;
              color:#fff;
              padding: 11.5px 20px 15px 11.5px;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }
          }
        }
      }
    }
  }
}
</style>

