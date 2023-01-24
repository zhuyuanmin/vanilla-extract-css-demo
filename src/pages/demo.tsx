import { useState } from 'react'
import { container, primary } from "./demo.css";
import { parent, brandText, textFont, spinGlobal } from "./globalStyle.css";
import { containerTheme, blueThemeClass, redThemeClass, responseThemeClass } from './theme.css'
import { backgroundVar, variant, blueVar, accentText, accentText2 } from './variants.css'
import { font, spin } from './font&keyframes.css'
import { containerSprinkles } from './sprinkles.css'

export default function Demo() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${container} ${parent} ${brandText} ${textFont} ${spinGlobal}`}>
      <button className={primary} onClick={() => setToggle(!toggle)}><a href="#">切换主题</a></button>

      <div className={`${containerTheme} ${responseThemeClass} ${toggle ? redThemeClass : blueThemeClass}`}>
        主题测试
        <span>蓝色主题</span>
        <span>红色主题</span>
      </div>

      <div className={`${backgroundVar.primary} ${variant.edf}`}>哈哈</div>
      <div className={`${accentText} ${blueVar}`}>css 变量测试</div>
      <div className={`${accentText2}`}>css 变量测试2</div>

      <div className={`${font} ${spin}`}>字体、keyframes测试</div>
      <div className={containerSprinkles}>原子测试</div>
    </div>
  );
}
