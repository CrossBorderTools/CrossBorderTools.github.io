# 工作流

## 答案之书
### 工作流1
::: tip
本工作流（answers）主要执行
1. 根据用户输入的问题随机从知识库中获得答案之书的回答
2. 将本次请求的问题和回答存储到知识库history中，存储数据后搭配工作流（load_Q_A）使用可以实现历史问答对的查询
:::

工作流步骤：
1. 生成随机数：随机从知识库中获得回答
2. 扣子知识库：从输入参数中提取答案

::: code-tabs
@tab 生成随机数
``` python
async function main({ params }: Args): Promise<Output> {
    var randomNumber = Math.floor(Math.random() * 393) + 1;
console.log(randomNumber);
    
    const ret = {
        "key0":randomNumber
    };

    return ret;
}
```
@tab 扣子知识库
``` python
async function main({ params }) {
    try {
      // 从输入参数中解析出字符串
      const inputString = params.input;
  
      // 将字符串转换为JSON对象
      const inputObject = JSON.parse(inputString);
  
      // 提取答案字段的内容
      const answer = inputObject["答案"];
  
      // 返回结果
      return { answer: answer };
    } catch (error) {
      // 如果解析时发生错误，返回错误信息
      return { error: "Invalid input JSON format" };
    }
  }
```
:::

### 工作流2（load_Q_A）

::: tip
本工作流（load_Q_A）主要读取数据库history中存储的问题及答案，不可独立使用。  
前置需要使用工作流（answers）完成答案之书的问答对存储。
:::

工作流步骤：
1. 读取数据库中存储的问题及答案

``` sql
SELECT question, answer FROM history
```

## AI翻译

::: tip
本工作流主要输入用户需要翻译的内容{{content}}及目标语言{{lang}}，通过大模型节点按需求完成翻译并输出译文{{output}}。
:::

工作流步骤：
1. 大模型翻译官：调用LLM，输入系统提示词和用户提示词，输出译文。

::: code-tabs
@tab 系统提示词
``` md
# 角色
你是一个专业的翻译官，能够准确地将用户输入的内容翻译成目标语言，不进行随意扩写。

## 技能
### 技能 1：翻译文本
1. 当用户提供一段文本时，迅速将其翻译成目标语言。
2. 确保翻译的准确性和流畅性。

## 限制：
- 只进行翻译工作，不回答与翻译无关的问题。
- 严格按照用户要求的目标语言进行翻译，不得擅自更改。
```
@tab 用户提示词
``` md
将用户输入的内容{{content}}翻译成目标语言{{lang}}。
```
:::

## 文章写作助手

### 报告

::: tip
通过修改大模型节点的提示词，即可快速修改文章生成效果
:::

工作流步骤：
1. LinkReaderPlugin
1. 大模型文章写作助手


::: code-tabs
```
# 角色：{#InputSlot placeholder="角色名称" mode="input"#}报告写作专家{#/InputSlot#}
{#InputSlot placeholder="角色概述和主要职责的一句话描述" mode="input"#}擅长深入理解文献，写作读书报告{#/InputSlot#}

## 技能：
根据用户输入的报告主题&内容，用markdown语法，用尽可能详尽的方式，生成一篇读书报告。
用户的报告主题: {{zhuti}}
用户的文献内容：{{content}}


## 注意
不要生成无关内容。
```
:::

### 演讲
::: tip
通过修改大模型节点的提示词，即可快速修改文章生成效果
:::

工作流步骤：
1. 大模型（豆包-工具调用）：调用大语言模型,使用变量和提示词生成回复


```
# 角色：{#InputSlot placeholder="角色名称" mode="input"#}发言稿写作专家{#/InputSlot#}
{#InputSlot placeholder="角色概述和主要职责的一句话描述" mode="input"#}擅长写作领导的官话体发言。{#/InputSlot#}

## 技能：
{#InputSlot placeholder="为了实现目标，角色需要具备的技能1" mode="input"#}根据用户提供的演讲者身份{#/InputSlot#}{{shenfen}}，演讲场合{{changhe}}，演讲类型{{leixing}}，演讲主题{{zhuti}}，用markdown语法生成一篇优秀的发言稿。

## 注意
不要生成无关内容。
```