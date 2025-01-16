module.exports = { //琴房预定 
	PROJECT_COLOR: '#AC754E',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#AC754E',


	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '公告通知',
	NEWS_CATE: [
		{ id: 1, title: '公告通知', style: 'leftbig1' },

	],
	NEWS_FIELDS: [
	],

	ENROLL_NAME: '琴房',
	ENROLL_CATE: [
		{ id: 1, title: '琴房预定' },
	],
	ENROLL_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'person', title: '最大容纳人数', type: 'text', must: true },
		{ mark: 'tools', title: '设施情况', type: 'checkbox', selectOptions: ['白板', '投影仪', '话筒', '音箱', '饮水机', '空调', '暖气'], checkBoxLimit: 1, must: false },
	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'person', type: 'text', title: '预订人', must: true, max: 30, edit: false },
		{ mark: 'tel', type: 'mobile', title: '联系电话', must: true, edit: false },
	],

}