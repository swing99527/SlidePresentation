import React, { useState } from 'react';
import { ArrowLeft, Monitor, CheckCircle, AlertCircle, HelpCircle, ChevronRight, ExternalLink, Plus, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface MVPPrototypeProps {
  onBack: () => void;
}

interface SymptomEvidence {
  id: string;
  symptom: string;
  originalText: string;
  severity: 'mild' | 'moderate' | 'severe';
  category: 'mood' | 'cognitive' | 'behavioral' | 'physical';
  confirmed: boolean | null; // true = confirmed, false = excluded, null = pending
}

interface DiagnosisCandidate {
  id: string;
  name: string;
  code: string;
  probability: 'high' | 'medium' | 'low';
  criteriaTotal: number;
  criteriaMet: number;
  criteriaUnclear: number;
}

export default function MVPPrototype({ onBack }: MVPPrototypeProps) {
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string>('mdd');
  const [isProcessing, setIsProcessing] = useState(false);

  // 症状证据数据
  const symptomEvidence: SymptomEvidence[] = [
    {
      id: 'sym1',
      symptom: '情绪显著低落',
      originalText: '我感觉大部分时间都像被乌云笼罩，什么事都提不起劲',
      severity: 'severe',
      category: 'mood',
      confirmed: true
    },
    {
      id: 'sym2',
      symptom: '兴趣或愉快感明显减退',
      originalText: '以前喜欢的事情现在都不想做了，感觉没有意义',
      severity: 'severe',
      category: 'mood',
      confirmed: true
    },
    {
      id: 'sym3',
      symptom: '疲劳或精力不足',
      originalText: '每天都觉得很累，就像电池耗尽了一样',
      severity: 'moderate',
      category: 'physical',
      confirmed: null
    },
    {
      id: 'sym4',
      symptom: '无价值感或过度自责',
      originalText: '我觉得自己是个彻底的失败者，什么都做不好',
      severity: 'severe',
      category: 'cognitive',
      confirmed: true
    },
    {
      id: 'sym5',
      symptom: '思维迟缓或注意力不集中',
      originalText: '很难集中注意力工作，脑子像糊住了一样',
      severity: 'moderate',
      category: 'cognitive',
      confirmed: null
    }
  ];

  // 诊断候选
  const diagnosisCandidates: DiagnosisCandidate[] = [
    {
      id: 'mdd',
      name: '重度抑郁症',
      code: 'F32.9',
      probability: 'high',
      criteriaTotal: 9,
      criteriaMet: 5,
      criteriaUnclear: 2
    },
    {
      id: 'pdd',
      name: '持续性抑郁障碍',
      code: 'F34.1',
      probability: 'medium',
      criteriaTotal: 6,
      criteriaMet: 3,
      criteriaUnclear: 2
    },
    {
      id: 'adjustment',
      name: '适应性障碍',
      code: 'F43.2',
      probability: 'low',
      criteriaTotal: 4,
      criteriaMet: 2,
      criteriaUnclear: 1
    }
  ];

  const handleSymptomConfirm = (symptomId: string, status: boolean | null) => {
    // 在实际应用中，这里会更新症状状态
    console.log(`Symptom ${symptomId} status: ${status}`);
  };

  const handleHighlightSymptom = (symptomId: string) => {
    setSelectedSymptom(symptomId);
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>返回演示</span>
              </Button>
              <div className="h-6 border-l border-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-sm">AI</div>
                <span className="text-lg text-gray-800">数字专家初诊助手 - MVP原型</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Monitor className="h-3 w-3" />
                <span>诊断工作台</span>
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
      <div className="max-w-full mx-auto p-6 pb-20">
        <div className="mb-4">
          <h1 className="text-xl mb-2 text-gray-800">数字专家初诊 - 诊断工作台</h1>
          <p className="text-base text-gray-600">从叙述到证据：结构化诊断报告生成</p>
        </div>

        {/* 诊断工作台 */}
        <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200">
          {/* 工具栏 */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg text-gray-800">初步诊断评估</h2>
              <Badge variant="secondary">Patient-ID: Client-12B4</Badge>
              <Badge variant="outline" className="text-xs">
                {isProcessing ? '分析中...' : '分析完成'}
              </Badge>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">保存草稿</Button>
              <Button size="sm">生成诊断报告</Button>
            </div>
          </div>

          {/* 两栏布局 + 侧边栏 */}
          <div className="grid grid-cols-12 gap-0 h-[600px]">
            {/* 左栏：证据面板 (Evidence Panel) */}
            <div className="col-span-7 bg-gray-50 border-r p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-800">📋 证据面板 (Evidence Panel)</h3>
                <Button variant="ghost" size="sm" onClick={simulateProcessing}>
                  {isProcessing ? '处理中...' : '重新分析'}
                </Button>
              </div>
              
              <Tabs defaultValue="symptoms" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="symptoms">症状证据</TabsTrigger>
                  <TabsTrigger value="narrative">原始叙述</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">已识别症状 ({symptomEvidence.length})</span>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">按类别分组</Badge>
                        <Badge variant="outline" className="text-xs">按严重程度排序</Badge>
                      </div>
                    </div>
                    
                    {/* 症状证据卡片 */}
                    {symptomEvidence.map((symptom) => (
                      <Card 
                        key={symptom.id}
                        className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                          selectedSymptom === symptom.id ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white'
                        }`}
                        onClick={() => handleHighlightSymptom(symptom.id)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-sm text-gray-800">{symptom.symptom}</h4>
                              <Badge 
                                variant={
                                  symptom.severity === 'severe' ? 'destructive' : 
                                  symptom.severity === 'moderate' ? 'outline' : 'secondary'
                                }
                                className="text-xs"
                              >
                                {symptom.severity === 'severe' ? '重度' : 
                                 symptom.severity === 'moderate' ? '中度' : '轻度'}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {symptom.category === 'mood' ? '情绪' :
                                 symptom.category === 'cognitive' ? '认知' :
                                 symptom.category === 'behavioral' ? '行为' : '躯体'}
                              </Badge>
                            </div>
                            
                            <div className="p-3 bg-gray-100 rounded text-sm mb-3">
                              <div className="text-xs text-gray-500 mb-1">原文引用:</div>
                              <div className="text-gray-700 italic">"{symptom.originalText}"</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant={symptom.confirmed === true ? "default" : "outline"}
                              className="h-6 px-2 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSymptomConfirm(symptom.id, true);
                              }}
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              确认
                            </Button>
                            <Button
                              size="sm"
                              variant={symptom.confirmed === null ? "default" : "outline"}
                              className="h-6 px-2 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSymptomConfirm(symptom.id, null);
                              }}
                            >
                              <HelpCircle className="h-3 w-3 mr-1" />
                              待核实
                            </Button>
                            <Button
                              size="sm"
                              variant={symptom.confirmed === false ? "default" : "outline"}
                              className="h-6 px-2 text-xs"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSymptomConfirm(symptom.id, false);
                              }}
                            >
                              <AlertCircle className="h-3 w-3 mr-1" />
                              排除
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                            <Info className="h-3 w-3" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="narrative" className="mt-4">
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-300">
                      <span className="text-blue-700 font-medium">治疗师：</span> 
                      <span className="text-gray-700 ml-2">描述一下你最近的感受，特别是情绪方面的变化。</span>
                    </div>
                    
                    <div 
                      className={`p-3 rounded border-l-4 border-yellow-300 cursor-pointer transition-colors ${
                        selectedSymptom === 'sym1' ? 'bg-yellow-200' : 'bg-yellow-50'
                      }`}
                      onClick={() => handleHighlightSymptom('sym1')}
                    >
                      <span className="text-gray-600 font-medium">来访者：</span> 
                      <span className="text-gray-700 ml-2">
                        <mark className="bg-yellow-200 px-1 rounded">我感觉大部分时间都像被乌云笼罩，什么事都提不起劲</mark>。
                        <mark className="bg-blue-200 px-1 rounded">以前喜欢的事情现在都不想做了，感觉没有意义</mark>。
                      </span>
                    </div>

                    <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-300">
                      <span className="text-blue-700 font-medium">治疗师：</span> 
                      <span className="text-gray-700 ml-2">这种感受持续多长时间了？</span>
                    </div>

                    <div 
                      className={`p-3 rounded border-l-4 border-red-300 cursor-pointer transition-colors ${
                        selectedSymptom === 'sym4' ? 'bg-red-100' : 'bg-red-50'
                      }`}
                      onClick={() => handleHighlightSymptom('sym4')}
                    >
                      <span className="text-gray-600 font-medium">来访者：</span> 
                      <span className="text-gray-700 ml-2">
                        差不多有两个月了。<mark className="bg-red-200 px-1 rounded">我觉得自己是个彻底的失败者，什么都做不好</mark>。
                        <mark className="bg-orange-200 px-1 rounded">每天都觉得很累，就像电池耗尽了一样</mark>。
                      </span>
                    </div>

                    <div className="text-center py-4">
                      <div className="text-xs text-gray-400">
                        💡 点击对话内容查看对应的症状证据卡片
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* 右侧栏：诊断助手 (Diagnostic Assistant) */}
            <div className="col-span-5 bg-white p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-gray-800">🩺 诊断助手 (Diagnostic Assistant)</h3>
                <Badge variant="outline" className="text-xs">AI分析完成</Badge>
              </div>

              <div className="space-y-6">
                {/* A. 初步诊断建议 */}
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm text-blue-800">📋 初步诊断建议</h4>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      <Info className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {diagnosisCandidates.map((diagnosis, index) => (
                      <div 
                        key={diagnosis.id}
                        className={`p-3 rounded border-l-4 cursor-pointer transition-all ${
                          selectedDiagnosis === diagnosis.id 
                            ? 'bg-blue-100 border-blue-500 shadow-sm' 
                            : 'bg-white border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedDiagnosis(diagnosis.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">#{index + 1}</span>
                            <span className="text-sm text-gray-800">{diagnosis.name}</span>
                            <Badge variant="outline" className="text-xs">{diagnosis.code}</Badge>
                          </div>
                          <Badge 
                            variant={
                              diagnosis.probability === 'high' ? 'default' :
                              diagnosis.probability === 'medium' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {diagnosis.probability === 'high' ? '高可能性' :
                             diagnosis.probability === 'medium' ? '中等可能性' : '低可能性'}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-600">
                          满足标准: {diagnosis.criteriaMet}/{diagnosis.criteriaTotal} 
                          | 信息不足: {diagnosis.criteriaUnclear}
                        </div>
                        {selectedDiagnosis === diagnosis.id && (
                          <div className="mt-2">
                            <ChevronRight className="h-4 w-4 text-blue-500" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* B. DSM-5标准核对表 */}
                {selectedDiagnosis && (
                  <Card className="p-4 bg-green-50 border-green-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm text-green-800">✅ DSM-5标准核对表</h4>
                      <Badge variant="outline" className="text-xs">
                        {diagnosisCandidates.find(d => d.id === selectedDiagnosis)?.name}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      {/* 示例DSM-5标准 */}
                      <div className="p-2 bg-white rounded border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-700">A.1 情绪显著低落</span>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <Button variant="ghost" size="sm" className="h-4 w-4 p-0" onClick={() => handleHighlightSymptom('sym1')}>
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 bg-white rounded border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-700">A.2 兴趣或愉快感明显减退</span>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <Button variant="ghost" size="sm" className="h-4 w-4 p-0" onClick={() => handleHighlightSymptom('sym2')}>
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 bg-white rounded border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-700">A.5 精神运动性迟滞或激越</span>
                          <div className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4 text-yellow-600" />
                            <span className="text-xs text-gray-500">信息不足</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 bg-white rounded border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-700">A.7 无价值感或过度自责</span>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <Button variant="ghost" size="sm" className="h-4 w-4 p-0" onClick={() => handleHighlightSymptom('sym4')}>
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-2 bg-green-100 rounded text-xs">
                      <div className="text-green-800">诊断标准满足情况: 5/9 (符合诊断阈值)</div>
                    </div>
                  </Card>
                )}

                {/* C. 鉴别诊断 */}
                <Card className="p-4 bg-orange-50 border-orange-200">
                  <h4 className="text-sm text-orange-800 mb-3">🔍 鉴别诊断要点</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded">
                      <div className="text-xs text-gray-700 mb-1">vs. 双相情感障碍</div>
                      <div className="text-xs text-gray-600">需排除既往躁狂/轻躁狂发作历史</div>
                    </div>
                    <div className="p-2 bg-white rounded">
                      <div className="text-xs text-gray-700 mb-1">vs. 焦虑障碍</div>
                      <div className="text-xs text-gray-600">虽有焦虑症状，但以抑郁情绪为主导</div>
                    </div>
                  </div>
                </Card>

                {/* D. 待确认问题 */}
                <Card className="p-4 bg-purple-50 border-purple-200">
                  <h4 className="text-sm text-purple-800 mb-3">❓ 待确认问题</h4>
                  <div className="space-y-2">
                    <div className="p-2 bg-white rounded border-l-2 border-purple-300">
                      <div className="text-xs text-gray-700">
                        是否存在精神运动性迟滞或激越的表现？
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded border-l-2 border-purple-300">
                      <div className="text-xs text-gray-700">
                        是否有自杀意念或自伤行为？
                      </div>
                    </div>
                    <div className="p-2 bg-white rounded border-l-2 border-purple-300">
                      <div className="text-xs text-gray-700">
                        症状是否由物质使用或其他医学疾病引起？
                      </div>
                    </div>
                  </div>
                </Card>

                {/* E. 最终报告生成器 */}
                <Card className="p-4 bg-gray-50 border-gray-200">
                  <h4 className="text-sm text-gray-800 mb-3">📄 最终报告生成器</h4>
                  <div className="text-xs text-gray-600 mb-3">
                    根据已确认的症状和诊断建议，生成结构化诊断报告
                  </div>
                  <Button size="sm" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    生成诊断报告草稿
                  </Button>
                </Card>
              </div>
            </div>


          </div>
        </div>

        {/* 操作指南 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-blue-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</div>
              <h4 className="text-blue-800">证据审查</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              在左栏证据面板中审查AI提取的症状，点击症状卡片查看原文引用，使用"确认/待核实/排除"按钮标记状态
            </p>
          </Card>

          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-green-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</div>
              <h4 className="text-green-800">诊断探索</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              在右栏诊断助手中点击诊断建议，查看DSM-5标准匹配情况，点击链接图标跳转到对应的症状证据
            </p>
          </Card>

          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-purple-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</div>
              <h4 className="text-purple-800">动态关联</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              系统自动高亮显示诊断相关的症状证据，在原始叙述和结构化诊断之间建立清晰的证据链
            </p>
          </Card>

          <Card className="p-4 bg-white shadow-lg border-l-4 border-l-orange-500">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</div>
              <h4 className="text-orange-800">报告生成</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              完成症状审核和诊断确认后，点击"生成诊断报告草稿"按钮，获得结构化的初步诊断报告
            </p>
          </Card>
        </div>

        {/* 核心交互流程示例 */}
        <div className="mt-8">
          <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <h3 className="text-lg mb-4 text-indigo-800">💡 核心交互流程示例</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
              <div className="bg-white/80 p-4 rounded-lg">
                <div className="text-indigo-600 mb-2">步骤 1</div>
                <div className="text-gray-700">Dr. Sharma 输入初诊记录，AI自动提取15个症状证据卡片</div>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 mx-auto mt-4" />
              <div className="bg-white/80 p-4 rounded-lg">
                <div className="text-green-600 mb-2">步骤 2</div>
                <div className="text-gray-700">点击"重度抑郁症"建议，左栏高亮相关症状，右栏显示DSM-5核对表</div>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 mx-auto mt-4" />
              <div className="bg-white/80 p-4 rounded-lg">
                <div className="text-purple-600 mb-2">步骤 3</div>
                <div className="text-gray-700">审核症状证据，确认关键症状，注意"信息不足"的标准</div>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 mx-auto mt-4" />
              <div className="bg-white/80 p-4 rounded-lg">
                <div className="text-orange-600 mb-2">步骤 4</div>
                <div className="text-gray-700">生成诊断报告草稿，包含确诊建议和待确认问题</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/60 rounded-lg">
              <div className="text-indigo-800 mb-2">🎯 设计理念体现</div>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>从叙述到证据</strong>：将非结构化文本转化为可验证的诊断证据</li>
                <li>• <strong>引导式探索</strong>：交互式界面引导医生探索症状和诊断关联</li>
                <li>• <strong>可解释性为核心</strong>：每个AI决策都有清晰的原文依据</li>
                <li>• <strong>工作台概念</strong>：医生主导诊断过程，AI提供专业辅助</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}