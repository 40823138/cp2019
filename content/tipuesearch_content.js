var tipuesearch = {"pages": [{'title': 'First', 'text': 'About \n \n', 'tags': '', 'url': 'First.html'}, {'title': 'DART', 'text': 'https://dartpad.dartlang.org/ \n // Copyright 2015 the Dart project authors. All rights reserved.\n// Use of this source code is governed by a BSD-style license\n// that can be found in the LICENSE file.\n\nvoid main() {\n  for (var i = 0; i < 4; i++) {\n    print(\'hello $i\');\n  }\n} \n \n http://mde.tw/dartpad/?id704a0544bc71b3244da17f06a32eac58 \n main() {\nfor (int i = 0; i < 5; i++) {\nprint(\'hello $i\');\n}\nprint(\'hello 中文\');\n\n}\n\n \n https://gist.github.com/40823138/acb05469b365ec70952b872fd57c68af \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b)\n// f 為沿位移方向的施力\n// dx/dt = v, dv/dt = (f-kx-bv)/m\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\n// 物體質量\nconst num m = 1;\n// 對質量的施力 f\nconst num f = 0.0;\n// 彈簧係數\nconst num k = 1;\n// 阻尼係數\nconst num b = 1;\n \n// 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h\nrungeKutta(t0, x0, v0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 宣告 v 為雙浮點數, 且設為起始值 v0\n  double v = v0;\n  print("t: ${t0.toStringAsFixed(3)}, x: ${x.toStringAsFixed(3)}, v: ${v.toStringAsFixed(3)}");\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值\n    // 因為必須兩個函式耦合, 必須同時計算\n    double xk1 = h * dxdt(t0, x, v);\n    double vk1 = h * dvdt(t0, x, v);\n    double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);\n    double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);\n    v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);\n    // 只列到小數點第三位\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n    print("t: ${t0.toStringAsFixed(3)}, x: ${x.toStringAsFixed(3)}, v: ${v.toStringAsFixed(3)}");\n  }\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return [x, v];\n}\n \n// 將微分方程式 "dx / dt = v" 定義為 dxdt 函式\ndxdt(t, x, v) {\n  return v;\n}\n// dx/dt = v, dv/dt = (f-kx-bv)/m\ndvdt(t,x, v) {\n  return (f - k*x - b*v)/m;\n}\n \n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x0 = 1;\n  num v0 = 0;\n  num t = 16;\n  double h = 0.1;\n  rungeKutta(t0, x0, v0, t, h);\n}\n \n \n https://gist.github.com/40823138/af11c66586858db3d25267687b4be78f \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b)\n// f 為沿位移方向的施力\n// dx/dt = v, dv/dt = (f-kx-bv)/m\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\n// 物體質量\nconst num m = 1;\n// 對質量的施力 f\nconst num f = 0.0;\n// 彈簧係數\nconst num k = 1;\n// 阻尼係數\nconst num b = 0;\n \n// 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h\nrungeKutta(t0, x0, v0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 宣告 v 為雙浮點數, 且設為起始值 v0\n  double v = v0;\n  print("t: ${t0.toStringAsFixed(3)}, x: ${x.toStringAsFixed(3)}, v: ${v.toStringAsFixed(3)}");\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值\n    // 因為必須兩個函式耦合, 必須同時計算\n    double xk1 = h * dxdt(t0, x, v);\n    double vk1 = h * dvdt(t0, x, v);\n    double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);\n    double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);\n    v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);\n    // 只列到小數點第三位\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n    print("t: ${t0.toStringAsFixed(3)}, x: ${x.toStringAsFixed(3)}, v: ${v.toStringAsFixed(3)}");\n  }\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return [x, v];\n}\n \n// 將微分方程式 "dx / dt = v" 定義為 dxdt 函式\ndxdt(t, x, v) {\n  return v;\n}\n// dx/dt = v, dv/dt = (f-kx-bv)/m\ndvdt(t,x, v) {\n  return (f - k*x - b*v)/m;\n}\n \n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x0 = 1;\n  num v0 = 0;\n  num t = 16;\n  double h = 0.1;\n  rungeKutta(t0, x0, v0, t, h);\n}\n \n \n 期中影片 \n', 'tags': '', 'url': 'DART.html'}, {'title': '按鈕', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow 溫度轉換 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n // ]]>', 'tags': '', 'url': '按鈕.html'}]};