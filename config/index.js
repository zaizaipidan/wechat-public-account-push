export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "wx25692e7f0a0a90b9",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "c17d2a1498c308090ae5f62b836247ec",
   */
  USERS: [
    {
      name: "臭屁蛋蛋", 
      id: "oP5ML69xeUs9bOqtLgJQcPlv6n84",
      useTemplateId: "CW-587EMf7gRGzVPTZxMdH84kT8BGsGIDDjzRVZqmxE",
      province: "福建",
      city: "福州",
    }, 
    {
      name: "",
      id: "",
      useTemplateId: "",
      province: "",
      city: "", 
    }, 
    {
      name: "老婆3", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "CW-587EMf7gRGzVPTZxMdH84kT8BGsGIDDjzRVZqmxE",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "崽崽屁蛋",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oP5ML69xeUs9bOqtLgJQcPlv6n84",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "广东",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "惠州",
   */
  FESTIVALS: [
    {"type": "生日", "name": "臭屁蛋蛋", "year": "1999", "date": "r03-06"},
    {"type": "生日", "name": "崽崽屁蛋", "year": "2000", "date": "r10-02"},
    ]

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2020-12-18"},
    
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
