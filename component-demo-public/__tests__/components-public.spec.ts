import automator, { MiniProgram } from '@mp/automator';
jest.setTimeout(5* 60 * 1000)

describe('automator', () => {
  let miniProgram: MiniProgram
  beforeAll(async () => {
    miniProgram = await automator.connect({ url: 'http://localhost:1234' })
  })
  afterAll(async () => {
    await miniProgram.close()
  })
  it('start miniProgram e2e test', async () => {
    let path = 'pages/tabbar/component/index'
    let page = await miniProgram.currentPage()
    expect(await page.path).toBe(path)
  })
  it('test component / view / view', async() => {
    let page = await miniProgram.currentPage()
    let view = await page.$('.kind-list-text')
    expect(await view.text()).toBe("View")
    await view.tap();
    let nav = await page.$('bn-navigator[url="pages/component/pages/view/view"]')
    await nav.tap()
    page = await miniProgram.currentPage()
    let flexWrap = await page.$('.flex-wrp:first-child')
    expect(await flexWrap.attribute('style')).toBe('flex-direction: row;')
    expect(await flexWrap.style('flex-direction')).toBe('row')
    await miniProgram.navigateBack()
  })
  it('test component / view / swiper', async() => {
    let page = await miniProgram.currentPage()
    let view = await page.$('.kind-list-text')
    await view.tap();
    let nav = await page.$('bn-navigator[url="pages/component/pages/swiper/swiper"]')
    await nav.tap()
    page = await miniProgram.currentPage()
    let swiperOptionBtns = await page.$$('.options_line .options_btn')

    // toggle bullets
    await swiperOptionBtns[3].tap()
    let swiperBullets = await page.$('bn-swiper:has(.swiper-pagination-bullets)')
    // can't find swiperBullets
    expect(swiperBullets).toBeNull();
    await swiperOptionBtns[3].tap()

    // * bullets to vertical
    await swiperOptionBtns[2].tap()
    swiperBullets =  await page.$('.swiper-pagination-bullets')
    expect(await swiperBullets.attribute('class')).toBe('swiper-pagination swiper-pagination-bullets swiper-pagination-vertical')

    // * update bullet color
    let swiperOptionInputs = await page.$$('.options_line .options_input input')
    await swiperOptionInputs[0].input('white')
    await swiperOptionBtns[4].tap()
    let swiperBulletItems =  await page.$$('.bn-swiper-pagination-bullet:not(.swiper-pagination-bullet-active)')
    expect(await swiperBulletItems[0].style('background-color')).toBe('rgb(255, 255, 255)')

    // * update bullet active color
    await swiperOptionInputs[1].input('red')
    await swiperOptionBtns[5].tap()
    let swiperBulletActive =  await page.$('.swiper-pagination-bullet-active')
    expect(await swiperBulletActive.style('background-color')).toBe('rgb(255, 0, 0)')

    // * update current
    await swiperOptionInputs[2].input('1')
    await swiperOptionBtns[6].tap()
    let swiperActive =  await page.$('.swiper-slide-active')
    expect(await swiperActive.style('background-color')).toBe('rgb(255, 0, 0)')
    await miniProgram.navigateBack()
  })
  it('test component / Form / switch', async() => {
    let page = await miniProgram.navigateTo('pages/component/pages/switch/switch')
    let bnSwitch = await page.$('bn-switch')
    await bnSwitch.tap()
    expect(await bnSwitch.attribute('aria-checked')).toBe("false")
    await bnSwitch.tap()
    expect(await bnSwitch.attribute('aria-checked')).toBe("true")
    await miniProgram.navigateBack()
  })
  it('test extended / navigation', async() => {
    let path = "pages/tabbar/extended/index"
    let page = await miniProgram.switchTab("pages/tabbar/extended/index")
    expect(await page.path).toBe(path)
    page = await miniProgram.navigateTo('pages/extended/pages/navigation/navigation')
    let bnButton = await page.$('bn-button:has-text("Toggle loading")')
    await bnButton.tap()
    const cnbLoading = await page.$('.cnb-loading')
    expect(await cnbLoading.style('animation')).toBe('1s steps(12) 0s infinite normal none running f')
  })
  it.only('test API / navigation', async() => {
    let path = "pages/tabbar/API/index"
    let page = await miniProgram.switchTab("pages/tabbar/API/index")
    expect(await page.path).toBe(path)
    await (await page.$('.kind-list-text:has-text("Open API")')).tap()
    await (await page.$('.navigator-text:has-text("getSystemInfo")')).tap()
    page = await miniProgram.currentPage();
    const bnText = await page.$('bn-text span')
    const result = await bnText.text()
    expect(result.startsWith('[getSystemInfo] SUCCESS:')).toBeTruthy();
  })
})
