import React, { useState } from 'react';
import { ArrowLeft, Monitor, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface MVPPrototypeProps {
  onBack: () => void;
}

export default function MVPPrototype({ onBack }: MVPPrototypeProps) {
  const [selectedText, setSelectedText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleHighlight = (text: string) => {
    setSelectedText(text);
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>返回演示</span>
              </Button>
              <div className="h-6 border-l border-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm">AI</div>
                <span className="text-lg text-gray-800">心理健康智能副驾 - MVP原型</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Monitor className="h-3 w-3" />
                <span>桌面版</span>
              </Badge>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">Dr. Anya Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl mb-2 text-gray-800">MVP交互原型演示</h1>
          <p className="text-gray-600">三栏式工作区 - 智能临床笔记助手</p>
        </div>

        {/* 三栏式工作区 */}
        <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200">
          {/* 工具栏 */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg text-gray-800">新建会话笔记</h2>
              <Badge variant="secondary">Patient-ID: Client-12B4</Badge>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">保存草稿</Button>
              <Button size="sm">完成并导出 ▼</Button>
            </div>
          </div>

          {/* 三栏布局 */}
          <div className="grid grid-cols-12 gap-0 h-[600px]">
            {/* 左栏：对话转录 */}
            <div className="col-span-4 bg-gray-50 border-r p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-800">📄 对话转录</h3>
                <Button variant="ghost" size="sm" onClick={simulateProcessing}>
                  {isProcessing ? '处理中...' : '重新分析'}
                </Button>
              </div>
              
              <div className="space-y-3 text-sm overflow-y-auto h-full">
                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-300">
                  <span className="text-blue-700 font-medium">治疗师：</span> 
                  <span className="text-gray-700 ml-2">今天感觉怎么样？有什么想要分享的吗？</span>
                </div>
                
                <div 
                  className={`p-3 rounded border-l-4 border-yellow-300 cursor-pointer transition-colors ${
                    selectedText === 'catastrophic' ? 'bg-yellow-200' : 'bg-yellow-50'
                  }`}
                  onClick={() => handleHighlight('catastrophic')}
                >
                  <span className="text-gray-600 font-medium">来访者：</span> 
                  <span className="text-gray-700 ml-2">
                    我觉得<mark className="bg-yellow-200 px-1 rounded">一切都完蛋了</mark>，
                    工作上的小错误让我觉得<mark className="bg-yellow-200 px-1 rounded">自己是个彻底的失败者</mark>。
                    我担心我会失去工作，然后失去一切...
                  </span>
                </div>

                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-300">
                  <span className="text-blue-700 font-medium">治疗师：</span> 
                  <span className="text-gray-700 ml-2">能具体说说这个"小错误"是什么吗？</span>
                </div>

                <div 
                  className={`p-3 rounded border-l-4 border-gray-300 cursor-pointer transition-colors ${
                    selectedText === 'detail' ? 'bg-gray-200' : 'bg-gray-50'
                  }`}
                  onClick={() => handleHighlight('detail')}
                >
                  <span className="text-gray-600 font-medium">来访者：</span> 
                  <span className="text-gray-700 ml-2">
                    就是我在报告中写错了一个数字，虽然后来改正了，但我一直在想如果被发现了怎么办...
                    <mark className="bg-blue-200 px-1 rounded">我无法停止这种想法</mark>。
                  </span>
                </div>

                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-300">
                  <span className="text-blue-700 font-medium">治疗师：</span> 
                  <span className="text-gray-700 ml-2">听起来这个想法一直困扰着你。你觉得这种担心合理吗？</span>
                </div>

                <div className="text-center py-4">
                  <div className="text-xs text-gray-400">
                    💡 点击对话内容查看AI分析结果
                  </div>
                </div>
              </div>
            </div>

            {/* 中栏：AI智能副驾 */}
            <div className="col-span-4 bg-white border-r p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-800">🧠 AI智能副驾</h3>
                <Badge variant="outline" className="text-xs">
                  {isProcessing ? '分析中...' : '分析完成'}
                </Badge>
              </div>

              <div className="space-y-4 overflow-y-auto h-full">
                {/* 会话摘要 */}
                <Card className="p-3 bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs text-blue-800">📋 会话摘要</h4>
                    <button className="text-blue-600 hover:text-blue-800 text-xs">展开</button>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    来访者表现出明显的灾难化思维模式，将工作中的小错误放大为个人失败和潜在的职业威胁。
                    显示出强烈的焦虑情绪和反刍思维的特征。
                  </p>
                </Card>

                {/* 临床观察 */}
                <Card className="p-3 bg-green-50 border-green-200">
                  <h4 className="text-xs text-green-800 mb-3">🔍 临床观察</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-600 mb-2">认知扭曲模式:</div>
                      <div className="flex flex-wrap gap-1">
                        <Badge 
                          className="text-xs bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer transition-colors"
                          onClick={() => handleHighlight('catastrophic')}
                        >
                          灾难化 (3) ℹ️ +
                        </Badge>
                        <Badge 
                          className="text-xs bg-orange-100 text-orange-700 hover:bg-orange-200 cursor-pointer"
                          onClick={() => handleHighlight('catastrophic')}
                        >
                          非黑即白 (1) ℹ️ +
                        </Badge>
                        <Badge className="text-xs bg-yellow-100 text-yellow-700 hover:bg-yellow-200 cursor-pointer">
                          过度概括 (2) ℹ️ +
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-600 mb-2">情绪状态:</div>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200 cursor-pointer">
                          焦虑 (强烈) ℹ️ +
                        </Badge>
                        <Badge className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200 cursor-pointer">
                          绝望感 (中等) ℹ️ +
                        </Badge>
                        <Badge className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer">
                          自我怀疑 (3) ℹ️ +
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-gray-600 mb-2">关键主题:</div>
                      <div className="flex flex-wrap gap-1">
                        <Badge className="text-xs bg-teal-100 text-teal-700 hover:bg-teal-200 cursor-pointer">
                          工作压力 (4) ℹ️ +
                        </Badge>
                        <Badge className="text-xs bg-cyan-100 text-cyan-700 hover:bg-cyan-200 cursor-pointer">
                          完美主义 (2) ℹ️ +
                        </Badge>
                        <Badge className="text-xs bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer">
                          反刍思维 (3) ℹ️ +
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-2 bg-green-100 rounded text-xs">
                    <div className="text-green-800 mb-1">💡 建议的干预方向：</div>
                    <ul className="text-green-700 space-y-1">
                      <li>• 认知重构技术 (挑战灾难化思维)</li>
                      <li>• 正念练习 (减少反刍)</li>
                      <li>• 行为实验 (检验预期)</li>
                    </ul>
                  </div>
                </Card>

                <div className="text-center py-2">
                  <div className="text-xs text-gray-400">
                    💡 点击标签添加到右侧笔记，点击 ℹ️ 查看依据
                  </div>
                </div>
              </div>
            </div>

            {/* 右栏：临床笔记 */}
            <div className="col-span-4 bg-gray-50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-800">📝 临床笔记</h3>
                <select className="text-xs border rounded px-2 py-1 bg-white">
                  <option>SOAP格式</option>
                  <option>DAP格式</option>
                  <option>空白笔记</option>
                </select>
              </div>

              <div className="space-y-4 overflow-y-auto h-full">
                <div>
                  <h4 className="text-sm mb-2 text-gray-700 font-medium">S (主观):</h4>
                  <div className="p-3 bg-white rounded border min-h-[80px] text-sm">
                    <span className="text-blue-700 bg-blue-100 px-2 py-1 rounded text-xs mr-2 inline-block mb-2">
                      AI建议
                    </span>
                    <div className="text-gray-700 leading-relaxed">
                      来访者报告感到"一切都完蛋了"，表现出明显的灾难化思维模式。
                      因工作中的一个小错误而产生强烈的焦虑和自我怀疑，担心失去工作和"失去一切"。
                      表现出反刍思维的特征，"无法停止这种想法"。
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-gray-700 font-medium">O (客观):</h4>
                  <div className="p-3 bg-white rounded border min-h-[60px] text-sm">
                    <div className="text-gray-700 leading-relaxed">
                      来访者在描述工作事件时表现出明显的焦虑情绪，语速较快，表情紧张。
                      多次使用极端化语言（"完蛋了"、"彻底的失败者"）。
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-gray-700 font-medium">A (评估):</h4>
                  <div className="p-3 bg-white rounded border min-h-[60px] text-sm">
                    <span className="text-gray-400 text-xs">
                      点击中栏标签自动填充...
                    </span>
                    <div className="mt-2 opacity-50">
                      <div className="text-xs text-gray-500">建议内容：</div>
                      <div className="text-xs text-gray-400">
                        • 广泛性焦虑症状<br/>
                        • 灾难化认知模式<br/>
                        • 反刍思维倾向
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-gray-700 font-medium">P (计划):</h4>
                  <div className="p-3 bg-white rounded border min-h-[60px] text-sm">
                    <span className="text-gray-400 text-xs">
                      点击中栏标签自动填充...
                    </span>
                    <div className="mt-2 opacity-50">
                      <div className="text-xs text-gray-500">建议内容：</div>
                      <div className="text-xs text-gray-400">
                        • 认知重构技术训练<br/>
                        • 正念减压练习<br/>
                        • 下次会话评估进展
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 操作指南 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-blue-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</div>
              <h4 className="text-blue-800">智能关联</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              点击左栏对话内容，中栏会显示对应的AI分析；悬停或点击AI标签，原文会自动高亮显示证据
            </p>
          </Card>

          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-green-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</div>
              <h4 className="text-green-800">一键添加</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              点击AI标签右侧的"+"号，可以直接将分析结果添加到右栏对应的SOAP字段中
            </p>
          </Card>

          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-purple-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</div>
              <h4 className="text-purple-800">知识追溯</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              点击"ℹ️"图标查看AI分析的依据来源，包括DSM-5诊断标准、CBT理论基础等权威资料
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}