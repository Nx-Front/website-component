<script>
export default {
    name: 'NxArt',
    render(h) {
        return h(
            'div',
            {
                class: 'nx-art'
            },
            this.$slots.default
        )
    }
}
</script>

<style lang='scss' scoped>
.nx-art {
  @for $i from 1 through 3 {
    h#{$i} {
      @if $i == 1 {
        text-align: center;
      }
      font-weight: 300;
      color: #333;
    }
  }
  p,
  li {
    font-weight: 200;
    font-family: "Times New Roman";
    color: #666;
  }
  ul {
    margin-left: 0.6rem;
  }
  li {
    list-style: square;
    margin-left: 0.6rem;
  }
}

// pc
@media screen and (min-width: 1366px) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 0;
    @for $i from 1 through 3 {
      h#{$i} {
        font-size: 1-$i * 0.2rem;
        line-height: 1rem;
      }
    }
    p,
    li {
      font-size: 16px;
      line-height: 0.5rem;
    }
  }
}

/* pad格式 暂时不处理 业务没有pad 当作pc处理 */
@media screen and (min-width: 769px) and (max-width: 1366px) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 32px;
    padding: 0 50px;
    @for $i from 1 through 3 {
      h#{$i} {
        font-size: 1-$i * 0.2rem;
        line-height: 1rem;
      }
    }
  }
}

@media screen and (max-width: 769px) {
  .nx-art {
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem 0;
    font-size: 0.8rem;
    line-height: 1.6rem;
    h1 {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    h2 {
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
    h3 {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
}
</style>