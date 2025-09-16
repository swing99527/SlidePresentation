import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "标题页",
    backgroundImage: "https://images.unsplash.com/photo-1666886573230-2b730505f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzkyOTM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: (
      <div className="h-full flex flex-col items-center justify-center text-center text-white relative z-10">
        <div className="space-y-8 max-w-4xl px-8">
          <h1 className="text-6xl mb-6 leading-tight">AI驱动的心理健康智能副驾</h1>
          <p className="text-2xl opacity-90">赋能临床医生，重塑心理评估与诊断的未来</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "产品愿景",
    backgroundColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    content: (
      <div className="h-full p-12 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 text-gray-800">产品愿景 (Product Vision)</h1>
            <p className="text-xl text-blue-600">愿景：为每一位临床医生配备一位不知疲倦的智能伙伴</p>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            我们正在构建一个AI驱动的辅助诊断生态系统，它能够深度融入临床工作流，实现三大核心价值：
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg border-l-4 border-l-blue-500">
              <Badge className="mb-4 bg-blue-100 text-blue-800">① 自动化与增效</Badge>
              <h3 className="mb-3 text-gray-800">Automate & Augment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                从繁琐的文档工作中解放医生，将每次对话自动转化为结构化、可分析的数据资产。
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-l-4 border-l-green-500">
              <Badge className="mb-4 bg-green-100 text-green-800">② 深层洞察与分析</Badge>
              <h3 className="mb-3 text-gray-800">Analyze & Insight</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                超越关键词，从文本、语音等多维度数据中识别传统方法难以发现的微妙模式、情绪动态和潜在风险。
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-l-4 border-l-purple-500">
              <Badge className="mb-4 bg-purple-100 text-purple-800">③ 辅助决策与个性化</Badge>
              <h3 className="mb-3 text-gray-800">Assist & Personalize</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                基于数据证据和权威知识库，为医生的鉴别诊断、治疗规划和风险预警提供可靠、可解释的建议。
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-lg text-gray-700 italic">
              这款智能副驾不是要取代医生，而是要增强医生的专业能力，让他们能更专注于最重要的事——与患者的连接。
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "产品路线图",
    backgroundColor: "bg-gradient-to-br from-gray-50 to-blue-50",
    content: (
      <div className="h-full p-12 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 text-gray-800">产品路线图 (Product Roadmap)</h1>
            <p className="text-xl text-gray-600">分阶段演进：从智能书记员到主动预测的合作伙伴</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg border-t-4 border-t-blue-500">
              <div className="text-center mb-4">
                <Badge className="mb-2 bg-blue-100 text-blue-800">短期: MVP</Badge>
                <p className="text-sm text-gray-500">未来6-9个月</p>
              </div>
              <h3 className="mb-4 text-center text-gray-800">🎯 核心目标: 智能书记员与观察者</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 text-gray-700">✅ 核心功能:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>自动化SOAP/DAP笔记</li>
                    <li>认知扭曲与情绪标签识别</li>
                    <li>可解释性洞察 (证据追溯)</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-blue-700">💎 价值: 立即减轻管理负担，提供初步洞察，建立信任。</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-t-4 border-t-green-500">
              <div className="text-center mb-4">
                <Badge className="mb-2 bg-green-100 text-green-800">中期: V2.0</Badge>
                <p className="text-sm text-gray-500">未来12-18个月</p>
              </div>
              <h3 className="mb-4 text-center text-gray-800">🎯 核心目标: 多模态分析师</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 text-gray-700">✅ 核心功能:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>语音模态分析 (语速/音调)</li>
                    <li>纵向趋势追踪与可视化</li>
                    <li>核心主题演变分析</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <p className="text-sm text-green-700">💎 价值: 提供更全面、更动态的患者视图。</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-t-4 border-t-purple-500">
              <div className="text-center mb-4">
                <Badge className="mb-2 bg-purple-100 text-purple-800">长期愿景</Badge>
                <p className="text-sm text-gray-500">未来2-3年</p>
              </div>
              <h3 className="mb-4 text-center text-gray-800">🎯 核心目标: 预测性与主动式伙伴</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 text-gray-700">✅ 核心功能:</h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    <li>早期风险预警模型 (病情恶化/自杀风险)</li>
                    <li>个性化治疗方案建议</li>
                    <li>与EHR系统的深度集成</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <p className="text-sm text-purple-700">💎 价值: 实现从"被动响应"到"主动预防"的范式转变。</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "MVP深度解析 - 核心使命",
    backgroundColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    content: (
      <div className="h-full p-12 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 text-gray-800">【MVP深度解析】核心使命</h1>
            <p className="text-xl text-indigo-600">MVP核心使命：通过"文本智能"，创造即时价值</p>
          </div>
          
          <Card className="p-8 bg-white shadow-lg border-l-4 border-l-indigo-500">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              我们的MVP将专注于单一但最高频的场景：处理匿名的心理治疗对话文本。
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl mb-4 text-indigo-800">核心目标：</h3>
              <p className="text-lg text-gray-700">
                在9个月内，交付一个能让临床医生<strong>"用得上、信得过、离不开"</strong>的临床笔记自动化与洞察辅助工具。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-3">✅</div>
                <h4 className="mb-3 text-blue-800">用得上 (Usable)</h4>
                <p className="text-sm text-gray-600">极致简洁的界面，无缝融入现有工作流。</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="mb-3 text-green-800">信得过 (Trustworthy)</h4>
                <p className="text-sm text-gray-600">所有AI洞察均有原文依据和知识来源。</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="mb-3 text-purple-800">离不开 (Indispensable)</h4>
                <p className="text-sm text-gray-600">显著节省文档时间，并提供有价值的临床线索。</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "MVP深度解析 - 核心功能与用户流程",
    backgroundColor: "bg-gradient-to-br from-green-50 to-teal-50",
    content: (
      <div className="h-full p-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-3 text-gray-800">【MVP深度解析】核心功能与用户流程</h1>
            <p className="text-lg text-green-600">三步完成：从原始文本到结构化洞察</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4 bg-white shadow-lg relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
              <h3 className="mb-3 text-gray-800 mt-1">轻松输入 (Input)</h3>
              <p className="text-gray-600 text-xs">临床医生将匿名化的对话文本粘贴或上传至安全平台。</p>
              <div className="mt-3 p-2 bg-blue-50 rounded">
                <div className="text-xs text-blue-600">📄 文本输入界面</div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white shadow-lg relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
              <h3 className="mb-3 text-gray-800 mt-1">智能引擎分析 (Processing)</h3>
              <p className="text-gray-600 text-xs">大型语言模型在数秒内完成深度分析。</p>
              <div className="mt-3 p-2 bg-green-50 rounded">
                <div className="text-xs text-green-600">🧠 AI处理中...</div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white shadow-lg relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
              <h3 className="mb-3 text-gray-800 mt-1">结构化输出 (Output)</h3>
              <p className="text-gray-600 text-xs">生成三大类结构化结果，可直接使用。</p>
              <div className="mt-3 p-2 bg-purple-50 rounded">
                <div className="text-xs text-purple-600">📊 结果展示</div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-lg mb-4 text-gray-800">详细输出内容：</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-l-blue-500 pl-3">
                <h4 className="mb-1 text-blue-800 text-sm">① 自动化临床笔记 (SOAP/DAP)</h4>
                <p className="text-xs text-gray-600">自动填充主观陈述(S)、客观观察(O)、评估(A)和计划(P)，用户可直接编辑和导出。</p>
              </div>
              
              <div className="border-l-4 border-l-green-500 pl-3">
                <h4 className="mb-1 text-green-800 text-sm">② 临床洞察标签 (Insight Tags)</h4>
                <p className="text-xs text-gray-600">自动识别并标记认知扭曲 (如: 灾难化)、核心情绪 (如: 绝望感)、关键主题 (如: 人际关系冲突)。</p>
              </div>
              
              <div className="border-l-4 border-l-purple-500 pl-3">
                <h4 className="mb-1 text-purple-800 text-sm">③ 可解释性AI (Explainable AI)</h4>
                <p className="text-xs text-gray-600">点击任何标签，原文中的相关证据句子将自动高亮，让医生快速验证，建立信任。</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "MVP深度解析 - 技术架构",
    backgroundImage: "https://images.unsplash.com/photo-1674027444636-ce7379d51252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBicmFpbnxlbnwxfHx8fDE3NTgwMDI1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: (
      <div className="h-full p-6 overflow-y-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-3 text-white">【MVP深度解析】技术架构</h1>
            <p className="text-lg text-blue-200">稳固、安全、可扩展的技术基石</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-3 text-gray-800 text-sm">🧠 核心模型 (Core Model)</h3>
              <p className="text-xs text-gray-600 mb-3">
                基于GPT-4o/Llama 3等顶尖基础模型，进行心理健康领域的指令微调 (Instruction Fine-tuning)。
              </p>
              <div className="bg-blue-50 p-2 rounded text-xs text-blue-700">
                GPT-4o + 心理健康专业训练
              </div>
            </Card>
            
            <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-3 text-gray-800 text-sm">📚 知识增强 (Knowledge Enrichment)</h3>
              <p className="text-xs text-gray-600 mb-3">
                集成RAG架构与向量数据库，连接DSM-5、CBT指南等权威知识库，为模型的输出提供依据。
              </p>
              <div className="bg-green-50 p-2 rounded text-xs text-green-700">
                RAG + DSM-5 + CBT指南
              </div>
            </Card>
            
            <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-3 text-gray-800 text-sm">🔍 可解释性 (Explainability)</h3>
              <p className="text-xs text-gray-600 mb-3">
                集成LIME/SHAP等XAI技术，为关键决策提供透明的解释。
              </p>
              <div className="bg-purple-50 p-2 rounded text-xs text-purple-700">
                LIME + SHAP + 证据追溯
              </div>
            </Card>
            
            <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-3 text-gray-800 text-sm">🔒 安全与合规 (Security & Compliance)</h3>
              <p className="text-xs text-gray-600 mb-3">
                端到端加密，严格的数据匿名化 (PII Scrubbing)处理，为符合HIPAA等法规设计。
              </p>
              <div className="bg-red-50 p-2 rounded text-xs text-red-700">
                HIPAA + 端到端加密 + PII保护
              </div>
            </Card>
          </div>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
            <h3 className="mb-3 text-gray-800 text-sm">⚙️ 技术栈 (Tech Stack)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="text-blue-600">后端: Python (FastAPI)</div>
              </div>
              <div className="text-center p-2 bg-green-50 rounded">
                <div className="text-green-600">前端: React/Vue</div>
              </div>
              <div className="text-center p-2 bg-purple-50 rounded">
                <div className="text-purple-600">云平台: AWS/GCP</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "RAG + 微调：打造持续进化的智能大脑",
    backgroundColor: "bg-gradient-to-br from-slate-50 to-blue-50",
    content: (
      <div className="h-full p-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl mb-3 text-gray-800">RAG + 微调：打造持续进化的智能大脑</h1>
            <p className="text-lg text-blue-600">从数据处理到模型进化的完整技术闭环</p>
          </div>
          
          {/* 简化的系统架构图 */}
          <div className="bg-white rounded-lg p-6 shadow-xl border-2 border-gray-200">
            <h3 className="text-xl mb-6 text-center text-gray-800">智能系统架构图</h3>
            
            {/* 核心流程 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-4 bg-blue-50 border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">📝</div>
                <h4 className="mb-2 text-blue-800">用户层</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>Web应用界面</div>
                  <div>身份认证</div>
                  <div>数据加密传输</div>
                </div>
              </Card>

              <Card className="p-4 bg-green-50 border-green-200 text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🛡️</div>
                <h4 className="mb-2 text-green-800">安全层</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>隐私数据脱敏</div>
                  <div>API网关</div>
                  <div>权限控制</div>
                </div>
              </Card>

              <Card className="p-4 bg-purple-50 border-purple-200 text-center">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🧠</div>
                <h4 className="mb-2 text-purple-800">AI核心</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>RAG知识检索</div>
                  <div>微调大语言模型</div>
                  <div>智能分析引擎</div>
                </div>
              </Card>

              <Card className="p-4 bg-gray-50 border-gray-200 text-center">
                <div className="w-16 h-16 bg-gray-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">💾</div>
                <h4 className="mb-2 text-gray-800">数据层</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>向量知识库</div>
                  <div>应用数据库</div>
                  <div>文件存储</div>
                </div>
              </Card>
            </div>

            {/* 数据流向 */}
            <div className="border-t pt-6">
              <h4 className="text-lg mb-4 text-center text-gray-800">智能处理流程</h4>
              <div className="flex items-center justify-between text-sm">
                <div className="bg-blue-100 p-3 rounded-lg text-center flex-1 mx-1">
                  <div className="text-blue-800 mb-1">📄 输入</div>
                  <div className="text-blue-600 text-xs">临床对话文本</div>
                </div>
                <div className="text-gray-400 text-xl">→</div>
                <div className="bg-red-100 p-3 rounded-lg text-center flex-1 mx-1">
                  <div className="text-red-800 mb-1">🧹 清洗</div>
                  <div className="text-red-600 text-xs">数据脱敏处理</div>
                </div>
                <div className="text-gray-400 text-xl">→</div>
                <div className="bg-yellow-100 p-3 rounded-lg text-center flex-1 mx-1">
                  <div className="text-yellow-800 mb-1">🔍 检索</div>
                  <div className="text-yellow-600 text-xs">知识库匹配</div>
                </div>
                <div className="text-gray-400 text-xl">→</div>
                <div className="bg-purple-100 p-3 rounded-lg text-center flex-1 mx-1">
                  <div className="text-purple-800 mb-1">⚡ 分析</div>
                  <div className="text-purple-600 text-xs">AI模型推理</div>
                </div>
                <div className="text-gray-400 text-xl">→</div>
                <div className="bg-green-100 p-3 rounded-lg text-center flex-1 mx-1">
                  <div className="text-green-800 mb-1">📊 输出</div>
                  <div className="text-green-600 text-xs">结构化结果</div>
                </div>
              </div>
            </div>
          </div>

          {/* 核心技术优势 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🔍</div>
                <h4 className="mb-3 text-blue-800">RAG 知识增强</h4>
                <p className="text-sm text-blue-700 leading-relaxed">
                  实时检索DSM-5、CBT等权威知识库，为AI推理提供专业依据，确保输出的准确性和权威性
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🎯</div>
                <h4 className="mb-3 text-purple-800">模型微调优化</h4>
                <p className="text-sm text-purple-700 leading-relaxed">
                  基于心理健康领域数据进行专门训练，让通用大模型更懂临床，提供更精准的专业分析
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🔄</div>
                <h4 className="mb-3 text-green-800">持续学习进化</h4>
                <p className="text-sm text-green-700 leading-relaxed">
                  收集用户反馈构建训练数据，定期更新模型参数，形成"使用越多，越准确"的正向循环
                </p>
              </div>
            </Card>
          </div>

          {/* 技术架构特点总结 */}
          <Card className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl mb-4 text-gray-800">技术架构核心特点</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-blue-600 mb-2">🛡️ 安全合规</div>
                  <div className="text-gray-600">HIPAA标准，端到端加密</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-green-600 mb-2">⚡ 实时响应</div>
                  <div className="text-gray-600">秒级分析，即时反馈</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-purple-600 mb-2">🎯 专业精准</div>
                  <div className="text-gray-600">领域微调，权威知识</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-orange-600 mb-2">🔄 自主进化</div>
                  <div className="text-gray-600">反馈学习，持续优化</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "MVP深度解析 - 成功衡量标准",
    backgroundColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    content: (
      <div className="h-full p-12 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 text-gray-800">【MVP深度解析】成功衡量的标准</h1>
            <p className="text-xl text-orange-600">我们如何定义MVP的成功？</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white shadow-lg border-t-4 border-t-blue-500">
              <h3 className="mb-4 text-blue-800">📈 产品采用率 (Adoption)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded">
                  <h4 className="text-sm mb-2 text-blue-700">周活跃用户 (WAU)</h4>
                  <p className="text-xs text-gray-600">种子用户中 &gt; 60% 每周至少使用一次</p>
                </div>
                <div className="p-4 bg-blue-50 rounded">
                  <h4 className="text-sm mb-2 text-blue-700">任务成功率</h4>
                  <p className="text-xs text-gray-600">&gt; 95% 的用户能顺利完成"上传-分析-保存"的核心流程</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-t-4 border-t-green-500">
              <h3 className="mb-4 text-green-800">🏥 临床价值 (Clinical Value)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded">
                  <h4 className="text-sm mb-2 text-green-700">定性反馈</h4>
                  <p className="text-xs text-gray-600">80%以上的测试用户反馈"显著节省了文档时间"并"获得了有用的临床洞察"</p>
                </div>
                <div className="p-4 bg-green-50 rounded">
                  <h4 className="text-sm mb-2 text-green-700">AI建议修正率</h4>
                  <p className="text-xs text-gray-600">用户修正AI生成标签的比例，随模型迭代持续降低</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-t-4 border-t-purple-500">
              <h3 className="mb-4 text-purple-800">🛡️ 信任与可靠性 (Trust & Reliability)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded">
                  <h4 className="text-sm mb-2 text-purple-700">可解释性满意度</h4>
                  <p className="text-xs text-gray-600">用户对"可解释性"功能的满意度评分 &gt; 4/5</p>
                </div>
                <div className="p-4 bg-purple-50 rounded">
                  <h4 className="text-sm mb-2 text-purple-700">系统稳定性</h4>
                  <p className="text-xs text-gray-600">系统正常运行时间 &gt; 99.9%</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-8 bg-gradient-to-r from-orange-100 to-yellow-100 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl mb-4 text-orange-800">关键成功指标</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-2">60%+</div>
                  <div className="text-gray-600">周活跃率</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-green-600 mb-2">95%+</div>
                  <div className="text-gray-600">任务成功率</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-purple-600 mb-2">80%+</div>
                  <div className="text-gray-600">用户满意度</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-orange-600 mb-2">99.9%+</div>
                  <div className="text-gray-600">系统可用性</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "市场与商业模式初步构想",
    backgroundColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    content: (
      <div className="h-full p-6 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-3 text-gray-800">市场与商业模式初步构想</h1>
            <p className="text-lg text-purple-600">切入点与未来商业化路径</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg border-l-4 border-l-blue-500">
              <h3 className="mb-4 text-blue-800 text-lg">🎯 目标用户 (Initial Target)</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="text-sm mb-1 text-blue-700">独立的心理咨询师</h4>
                  <p className="text-xs text-gray-600">个人执业，需要高效的工具提升服务质量</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="text-sm mb-1 text-blue-700">小型心理诊所</h4>
                  <p className="text-xs text-gray-600">2-10人规模，追求运营效率优化</p>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-xs text-yellow-800">
                    <strong>优势：</strong> 痛点最强，决策链最短，便于快速验证和迭代。
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border-l-4 border-l-green-500">
              <h3 className="mb-4 text-green-800 text-lg">💰 商业模式 (Business Model)</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="text-sm mb-1 text-gray-700">MVP阶段</h4>
                  <p className="text-xs text-gray-600">邀请制免费测试，建立口碑和案例</p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="text-sm mb-1 text-green-700">商业化阶段</h4>
                  <p className="text-xs text-gray-600">采用B2B SaaS订阅模式，按临床医生坐席数量或API调用量计费</p>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <h4 className="text-sm mb-1 text-purple-700">长期规划</h4>
                  <p className="text-xs text-gray-600">发展面向大型医疗机构和EHR厂商的企业级解决方案</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg">
            <h3 className="text-lg mb-4 text-center text-purple-800">商业化路径图</h3>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="w-10 h-10 bg-gray-400 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm">1</div>
                <h4 className="text-xs mb-1 text-gray-700">MVP免费测试</h4>
                <p className="text-xs text-gray-500">建立口碑</p>
              </div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="text-center flex-1">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm">2</div>
                <h4 className="text-xs mb-1 text-green-700">SaaS订阅</h4>
                <p className="text-xs text-gray-500">中小诊所</p>
              </div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="text-center flex-1">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm">3</div>
                <h4 className="text-xs mb-1 text-purple-700">企业级方案</h4>
                <p className="text-xs text-gray-500">大型医疗机构</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "团队与资源配置",
    backgroundImage: "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZW50YWwlMjBoZWFsdGglMjB0aGVyYXB5JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc1ODAwMjU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: (
      <div className="h-full p-6 overflow-y-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-3 text-white">团队与资源配置</h1>
            <p className="text-lg text-blue-200">整合专业资源，组建跨学科专业团队</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-4 text-gray-800 text-lg">👥 核心团队构成</h3>
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-blue-50 rounded">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">👨‍⚕️</div>
                  <div>
                    <h4 className="text-xs text-blue-700">临床专家 (Clinical Lead)</h4>
                    <p className="text-xs text-gray-600">精神科医生/心理治疗师</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2 bg-green-50 rounded">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">📋</div>
                  <div>
                    <h4 className="text-xs text-green-700">产品经理 (Product Manager)</h4>
                    <p className="text-xs text-gray-600">负责产品规划与用户体验</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2 bg-purple-50 rounded">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">🤖</div>
                  <div>
                    <h4 className="text-xs text-purple-700">AI/ML工程师 (AI/ML Lead)</h4>
                    <p className="text-xs text-gray-600">负责算法开发与模型优化</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2 bg-orange-50 rounded">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">💻</div>
                  <div>
                    <h4 className="text-xs text-orange-700">全栈工程师 (Full-Stack Engineer)</h4>
                    <p className="text-xs text-gray-600">负责平台开发与系统架构</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2 bg-red-50 rounded">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">⚖️</div>
                  <div>
                    <h4 className="text-xs text-red-700">合规/法律顾问 (Part-time)</h4>
                    <p className="text-xs text-gray-600">确保HIPAA等法规合规性</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-4 text-gray-800 text-lg">💼 资源配置方案</h3>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <h4 className="text-sm mb-1 text-green-800">🏢 研发资源投入</h4>
                  <p className="text-xs text-gray-600 mb-1">组织专业技术团队，专注9-12个月MVP开发与验证。</p>
                  <div className="text-xs text-green-700 bg-green-100 p-1 rounded">
                    技术人员、计算资源、开发工具配置
                  </div>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <h4 className="text-sm mb-1 text-blue-800">🏥 临床合作伙伴</h4>
                  <p className="text-xs text-gray-600 mb-1">与临床机构合作，进行安全的数据验证和产品测试。</p>
                  <div className="text-xs text-blue-700 bg-blue-100 p-1 rounded">
                    建立临床验证环境，获得真实用户反馈
                  </div>
                </div>
                
                <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                  <h4 className="text-sm mb-1 text-purple-800">☁️ 基础设施支持</h4>
                  <p className="text-xs text-gray-600 mb-1">利用云平台和AI训练资源，确保项目高效推进。</p>
                  <div className="text-xs text-purple-700 bg-purple-100 p-1 rounded">
                    云服务、GPU资源、数据存储与安全
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm shadow-lg">
            <h3 className="text-center text-lg mb-3 text-gray-800">关键里程碑时间线</h3>
            <div className="flex items-center justify-between text-xs">
              <div className="text-center">
                <div className="text-blue-600 mb-1">Month 1-2</div>
                <div className="text-gray-600">团队组建</div>
              </div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-green-600 mb-1">Month 3-5</div>
                <div className="text-gray-600">MVP开发</div>
              </div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-purple-600 mb-1">Month 6-7</div>
                <div className="text-gray-600">内测验证</div>
              </div>
              <div className="w-6 h-0.5 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-orange-600 mb-1">Month 8-9</div>
                <div className="text-gray-600">产品完善</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "总结与问答",
    backgroundColor: "bg-gradient-to-br from-indigo-900 to-purple-900",
    content: (
      <div className="h-full flex flex-col items-center justify-center text-center text-white relative z-10">
        <div className="space-y-12 max-w-5xl px-8">
          <div>
            <h1 className="text-5xl mb-8 leading-tight">总结与问答</h1>
            <h2 className="text-3xl mb-6 text-blue-200">加入我们，共同开启心理健康服务的新纪元</h2>
          </div>
          
          <Card className="p-8 bg-white/10 backdrop-blur-md border border-white/20">
            <p className="text-xl leading-relaxed text-blue-100">
              这款智能副驾不仅仅是一个工具，它代表着一种人机协同的新范式，
              将为心理健康领域带来前所未有的效率与深度。
            </p>
          </Card>
          
          <div className="space-y-6">
            <div className="text-4xl">谢谢！</div>
            <div className="text-6xl">Q&A</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm">创新技术</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm">人机协同</div>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
              <div className="text-2xl mb-2">🌟</div>
              <div className="text-sm">未来可期</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // 键盘导航
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Escape') {
        setIsAutoPlay(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  // 自动播放
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : 0);
      }, 10000); // 10秒自动切换
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : prev);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev > 0 ? prev - 1 : prev);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0">
        {currentSlideData.backgroundImage ? (
          <>
            <ImageWithFallback
              src={currentSlideData.backgroundImage}
              alt={`Slide ${currentSlide + 1} background`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </>
        ) : (
          <div className={`w-full h-full ${currentSlideData.backgroundColor || 'bg-white'}`}></div>
        )}
      </div>

      {/* 幻灯片内容 */}
      <div className="relative z-10 w-full h-full">
        {currentSlideData.content}
      </div>

      {/* 导航控制 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {/* 上一页按钮 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-white hover:bg-white/20 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* 幻灯片指示器 */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* 下一页按钮 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="text-white hover:bg-white/20 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* 自动播放按钮 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-white hover:bg-white/20"
          >
            {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* 进度条 */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Progress value={(currentSlide + 1) / slides.length * 100} className="h-1 bg-white/20" />
      </div>

      {/* 幻灯片计数器 */}
      <div className="absolute top-6 right-6 z-20">
        <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20">
          {currentSlide + 1} / {slides.length}
        </Badge>
      </div>

      {/* 提示信息 */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="text-white/60 text-sm">
          使用 ← → 键或空格键导航
        </div>
      </div>
    </div>
  );
}