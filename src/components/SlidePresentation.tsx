import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
}

interface SlidePresentationProps {
  onShowPrototype?: () => void;
}

export default function SlidePresentation({
  onShowPrototype,
}: SlidePresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      title: "标题页",
      backgroundImage:
        "https://images.unsplash.com/photo-1666886573230-2b730505f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzkyOTM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center text-white relative z-10 pb-20">
          <div className="space-y-8 max-w-5xl px-8">
            <h1 className="text-6xl mb-6 leading-tight">
              AI驱动的心理健康智能副驾
            </h1>
            <p className="text-2xl opacity-90">
              赋能临床医生，重塑心理评估与诊断的未来
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "产品愿景",
      backgroundColor:
        "bg-gradient-to-br from-blue-50 to-indigo-100",
      content: (
        <div className="h-full p-12 pb-20 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-gray-800">
                产品愿景 (Product Vision)
              </h1>
              <p className="text-xl text-blue-600">
                愿景：为每一次诊断提供标准、透明、智能的决策支持
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              我们正在构建一个AI驱动的辅助诊断生态系统，它能够深度融入临床工作流，实现三大核心价值：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white shadow-lg border-l-4 border-l-blue-500">
                <Badge className="mb-4 bg-blue-100 text-blue-800 text-base">
                  ① 智能症状识别
                </Badge>
                <h3 className="mb-3 text-gray-800 text-xl">
                  Intelligent Symptom Recognition
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  自动从患者叙述中精准提取关键症状，建立症状与原文的直接证据链接，确保每个识别结果都有据可查。
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-l-4 border-l-green-500">
                <Badge className="mb-4 bg-green-100 text-green-800 text-base">
                  ② 标准化诊断匹配
                </Badge>
                <h3 className="mb-3 text-gray-800 text-xl">
                  Standardized Diagnostic Matching
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  基于DSM-5权威标准，将识别的症状与诊断标准进行精确匹配，生成可能性排序的诊断建议清单。
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-l-4 border-l-purple-500">
                <Badge className="mb-4 bg-purple-100 text-purple-800 text-base">
                  ③ 可解释性决策支持
                </Badge>
                <h3 className="mb-3 text-gray-800 text-xl">
                  Explainable Decision Support
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  为每个诊断建议提供清晰的依据说明，包括满足的标准、缺失的信息和需要进一步确认的问题。
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
      ),
    },
    {
      id: 3,
      title: "产品路线图",
      backgroundColor:
        "bg-gradient-to-br from-gray-50 to-blue-50",
      content: (
        <div className="h-full p-12 pb-20 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-gray-800">
                产品路线图 (Product Roadmap)
              </h1>
              <p className="text-xl text-gray-600">
                三阶段演进：从数字专家初诊到普惠社会的诊断引擎
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-white shadow-lg border-t-4 border-t-blue-500">
                <div className="text-center mb-4">
                  <Badge className="mb-2 bg-blue-100 text-blue-800 text-base">
                    第一阶段: MVP
                  </Badge>
                  <p className="text-base text-gray-500">
                    未来6-9个月
                  </p>
                </div>
                <h3 className="mb-4 text-center text-gray-800 text-lg">
                  🎯 数字专家初诊
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="mb-2 text-gray-700 text-base">
                      ✅ 核心功能:
                    </h4>
                    <ul className="text-base text-gray-600 space-y-1 list-disc list-inside">
                      <li>基于文本的症状提取与分析</li>
                      <li>生成初步诊断建议列表</li>
                      <li>DSM-5标准匹配与证据链接</li>
                      <li>医生审核与修订工作流</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-base text-blue-700">
                      💎 价值:
                      提升初诊效率与标准化，减少诊断遗漏，为医生提供强大的决策起点。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-t-4 border-t-green-500">
                <div className="text-center mb-4">
                  <Badge className="mb-2 bg-green-100 text-green-800 text-base">
                    第二阶段: V2.0
                  </Badge>
                  <p className="text-base text-gray-500">
                    未来12-18个月
                  </p>
                </div>
                <h3 className="mb-4 text-center text-gray-800 text-lg">
                  🎯 数字专家诊断（多模态）
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="mb-2 text-gray-700 text-base">
                      ✅ 核心功能:
                    </h4>
                    <ul className="text-base text-gray-600 space-y-1 list-disc list-inside">
                      <li>融合文本、语音、行为等多模态数据</li>
                      <li>提升复杂/共病案例的诊断精度</li>
                      <li>纵向趋势分析与病程预测</li>
                      <li>临床医生最终审核与确认</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-base text-green-700">
                      💎 价值:
                      通过更全面的数据维度，显著提升诊断的深度与准确性。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg border-t-4 border-t-purple-500">
                <div className="text-center mb-4">
                  <Badge className="mb-2 bg-purple-100 text-purple-800 text-base">
                    第三阶段: 规模化
                  </Badge>
                  <p className="text-base text-gray-500">
                    未来2-3年
                  </p>
                </div>
                <h3 className="mb-4 text-center text-gray-800 text-lg">
                  🎯 普惠诊断引擎
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="mb-2 text-gray-700 text-base">
                      ✅ 核心功能:
                    </h4>
                    <ul className="text-base text-gray-600 space-y-1 list-disc list-inside">
                      <li>形成可大规模复制的诊断服务</li>
                      <li>应用于社会、学校、企业等场景</li>
                      <li>实现早期筛查与批量评估</li>
                      <li>建立心理健康服务网络</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded">
                    <p className="text-base text-purple-700">
                      💎 价值:
                      将专业的诊断能力普惠化，赋能社会心理健康服务体系。
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "MVP深度解析 - 核心使命",
      backgroundColor:
        "bg-gradient-to-br from-indigo-50 to-purple-50",
      content: (
        <div className="h-full p-12 pb-20 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-gray-800">
                【MVP深度解析】核心使命
              </h1>
              <p className="text-xl text-indigo-600">
                MVP核心使命：成为临床医生最可靠的"初诊第一助理"
              </p>
            </div>

            <Card className="p-8 bg-white shadow-lg border-l-4 border-l-indigo-500">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                我们的MVP将专注于心理评估的初始阶段：将患者的初次intake信息转化为一份结构化的初步诊断报告。
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl mb-4 text-indigo-800">
                  核心目标：
                </h3>
                <p className="text-lg text-gray-700">
                  在9个月内，交付一个能够为临床医生生成
                  <strong>"有证据、可解释、易修订"</strong>
                  的初步诊断报告的智能工具。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl mb-3">📋</div>
                  <h4 className="mb-3 text-blue-800 text-lg">
                    有证据 (Evidence-Based)
                  </h4>
                  <p className="text-base text-gray-600">
                    报告中的每一条症状都直接链接到患者原始叙述中的原文。
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl mb-3">🔍</div>
                  <h4 className="mb-3 text-green-800 text-lg">
                    可解释 (Explainable)
                  </h4>
                  <p className="text-base text-gray-600">
                    每一个诊断建议都清晰列出其所依据的DSM-5标准，以及满足/不满足的项。
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-4xl mb-3">✏️</div>
                  <h4 className="mb-3 text-purple-800 text-lg">
                    易修订 (Actionable)
                  </h4>
                  <p className="text-base text-gray-600">
                    报告格式清晰，便于医生快速审阅、编辑和最终确认，无缝融入其工作流。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "MVP深度解析 - 核心功能与用户流程",
      backgroundColor:
        "bg-gradient-to-br from-green-50 to-teal-50",
      content: (
        <div className="h-full p-12 pb-20 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 py-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-gray-800">
                【MVP深度解析】核心功能与用户流程
              </h1>
              <p className="text-xl text-green-600">
                三步完成：从来访者叙述到结构化诊断报告
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card className="p-6 bg-white shadow-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-base">
                  1
                </div>
                <h3 className="mb-4 text-gray-800 mt-2 text-xl">
                  输入初诊信息 (Input)
                </h3>
                <p className="text-gray-600 text-lg">
                  临床医生将匿名化的患者初次访谈记录、自述问卷等文本信息输入平台。
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <div className="text-lg text-blue-600">
                    📄 初诊信息采集
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-base">
                  2
                </div>
                <h3 className="mb-4 text-gray-800 mt-2 text-xl">
                  AI分析与匹配 (Processing)
                </h3>
                <p className="text-gray-600 text-lg">
                  智能引擎自动提取症状描述，并将其与DSM-5/ICD-11诊断标准进行精确匹配。
                </p>
                <div className="mt-4 p-4 bg-green-50 rounded">
                  <div className="text-lg text-green-600">
                    🧠 诊断分析中...
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-base">
                  3
                </div>
                <h3 className="mb-4 text-gray-800 mt-2 text-xl">
                  生成初步诊断报告 (Output)
                </h3>
                <p className="text-gray-600 text-lg">
                  输出一份交互式的报告，包含四大核心模块。
                </p>
                <div className="mt-4 p-4 bg-purple-50 rounded">
                  <div className="text-lg text-purple-600">
                    📊 诊断报告生成
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-white shadow-lg">
              <h3 className="text-xl mb-6 text-gray-800">
                详细输出内容：
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-l-blue-500 pl-4">
                  <h4 className="mb-2 text-blue-800 text-base">
                    ① 症状清单 (Symptom Checklist)
                  </h4>
                  <p className="text-base text-gray-600">
                    从原文中提取的所有相关症状描述，并链接回原文证据。
                  </p>
                </div>

                <div className="border-l-4 border-l-green-500 pl-4">
                  <h4 className="mb-2 text-green-800 text-base">
                    ② 初步诊断建议 (Suggested Diagnoses)
                  </h4>
                  <p className="text-base text-gray-600">
                    按可能性排序的诊断列表（如：1. 重度抑郁症 2.
                    持续性抑郁障碍）。每个诊断下方都附有DSM-5标准核对表，清晰标出符合、不符合或信息不足的项。
                  </p>
                </div>

                <div className="border-l-4 border-l-orange-500 pl-4">
                  <h4 className="mb-2 text-orange-800 text-base">
                    ③ 鉴别诊断要点 (Differential Diagnosis)
                  </h4>
                  <p className="text-base text-gray-600">
                    提示需要与哪些其他疾病进行区分，并列出关键区分点。
                  </p>
                </div>

                <div className="border-l-4 border-l-purple-500 pl-4">
                  <h4 className="mb-2 text-purple-800 text-base">
                    ④ 待确认问题 (Questions for Follow-up)
                  </h4>
                  <p className="text-base text-gray-600">
                    基于分析，提出建议医生在后续访谈中需要进一步澄清的问题。
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "MVP深度解析 - 技术架构",
      backgroundImage:
        "https://images.unsplash.com/photo-1674027444636-ce7379d51252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBicmFpbnxlbnwxfHx8fDE3NTgwMDI1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: (
        <div className="h-full p-12 pb-20 relative z-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 py-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-white">
                【MVP深度解析】技术架构
              </h1>
              <p className="text-xl text-blue-200">
                稳固、安全、可扩展的技术基石
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-gray-800 text-base">
                  🧠 核心模型 (Core Model)
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  基于GPT-4o/Llama
                  3等顶尖基础模型，进行心理健康领域的指令微调
                  (Instruction Fine-tuning)。
                </p>
                <div className="bg-blue-50 p-3 rounded text-base text-blue-700">
                  GPT-4o + 心理健康专业训练
                </div>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-gray-800 text-base">
                  📚 知识增强 (Knowledge Enrichment)
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  集成RAG架构与向量数据库，连接DSM-5、CBT指南等权威知识库，为模型的输出提供依据。
                </p>
                <div className="bg-green-50 p-3 rounded text-base text-green-700">
                  RAG + DSM-5 + CBT指南
                </div>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-gray-800 text-base">
                  🔍 可解释性 (Explainability)
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  集成LIME/SHAP等XAI技术，为关键决策提供透明的解释。
                </p>
                <div className="bg-purple-50 p-3 rounded text-base text-purple-700">
                  LIME + SHAP + 证据追溯
                </div>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
                <h3 className="mb-3 text-gray-800 text-base">
                  🔒 安全与合规 (Security & Compliance)
                </h3>
                <p className="text-base text-gray-600 mb-3">
                  端到端加密，严格的数据匿名化 (PII
                  Scrubbing)处理，为符合HIPAA等法规设计。
                </p>
                <div className="bg-red-50 p-3 rounded text-base text-red-700">
                  HIPAA + 端到端加密 + PII保护
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="mb-4 text-gray-800 text-base">
                ⚙️ 技术栈 (Tech Stack)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
                <div className="text-center p-3 bg-blue-50 rounded">
                  <div className="text-blue-600">
                    后端: Python (FastAPI)
                  </div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded">
                  <div className="text-green-600">
                    前端: React/Vue
                  </div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded">
                  <div className="text-purple-600">
                    云平台: AWS/GCP
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "RAG + 微调：打造持续进化的智能大脑",
      backgroundColor:
        "bg-gradient-to-br from-slate-50 to-blue-50",
      content: (
        <div className="h-full p-12 pb-20 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 py-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl mb-4 text-gray-800">
                RAG + 微调：打造持续进化的智能大脑
              </h1>
              <p className="text-xl text-blue-600">
                从数据处理到模型进化的完整技术闭环
              </p>
            </div>

            {/* 简化的系统架构图 */}
            <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-gray-200">
              <h3 className="text-2xl mb-8 text-center text-gray-800">
                智能系统架构图
              </h3>

              {/* 核心流程 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 bg-blue-50 border-blue-200 text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    📝
                  </div>
                  <h4 className="mb-3 text-blue-800 text-base">
                    用户层
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Web应用界面</div>
                    <div>身份认证</div>
                    <div>数据加密传输</div>
                  </div>
                </Card>

                <Card className="p-6 bg-green-50 border-green-200 text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🛡️
                  </div>
                  <h4 className="mb-3 text-green-800 text-base">
                    安全层
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>隐私数据脱敏</div>
                    <div>API网关</div>
                    <div>权限控制</div>
                  </div>
                </Card>

                <Card className="p-6 bg-purple-50 border-purple-200 text-center">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🧠
                  </div>
                  <h4 className="mb-3 text-purple-800 text-base">
                    AI核心
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>RAG知识检索</div>
                    <div>微调大语言模型</div>
                    <div>智能分析引擎</div>
                  </div>
                </Card>

                <Card className="p-6 bg-gray-50 border-gray-200 text-center">
                  <div className="w-16 h-16 bg-gray-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    💾
                  </div>
                  <h4 className="mb-3 text-gray-800 text-base">
                    数据层
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>向量知识库</div>
                    <div>应用数据库</div>
                    <div>文件存储</div>
                  </div>
                </Card>
              </div>

              {/* 数据流向 */}
              <div className="border-t pt-8">
                <h4 className="text-xl mb-6 text-center text-gray-800">
                  智能处理流程
                </h4>
                <div className="flex items-center justify-between text-base">
                  <div className="bg-blue-100 p-4 rounded-lg text-center flex-1 mx-1">
                    <div className="text-blue-800 mb-2 text-base">
                      📄 输入
                    </div>
                    <div className="text-blue-600 text-sm">
                      临床对话文本
                    </div>
                  </div>
                  <div className="text-gray-400 text-2xl">
                    →
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg text-center flex-1 mx-1">
                    <div className="text-red-800 mb-2 text-base">
                      🧹 清洗
                    </div>
                    <div className="text-red-600 text-sm">
                      数据脱敏处理
                    </div>
                  </div>
                  <div className="text-gray-400 text-2xl">
                    →
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg text-center flex-1 mx-1">
                    <div className="text-yellow-800 mb-2 text-base">
                      🔍 检索
                    </div>
                    <div className="text-yellow-600 text-sm">
                      知识库匹配
                    </div>
                  </div>
                  <div className="text-gray-400 text-2xl">
                    →
                  </div>
                  <div className="bg-purple-100 p-4 rounded-lg text-center flex-1 mx-1">
                    <div className="text-purple-800 mb-2 text-base">
                      ⚡ 分析
                    </div>
                    <div className="text-purple-600 text-sm">
                      AI模型推理
                    </div>
                  </div>
                  <div className="text-gray-400 text-2xl">
                    →
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg text-center flex-1 mx-1">
                    <div className="text-green-800 mb-2 text-base">
                      📊 输出
                    </div>
                    <div className="text-green-600 text-sm">
                      结构化结果
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 核心技术优势 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔍
                  </div>
                  <h4 className="mb-3 text-blue-800 text-base">
                    RAG 知识增强
                  </h4>
                  <p className="text-sm text-blue-700 leading-relaxed">
                    实时检索DSM-5、CBT等权威知识库，为AI推理提供专业依据，确保输出的准确性和权威性
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🎯
                  </div>
                  <h4 className="mb-3 text-purple-800 text-base">
                    模型微调优化
                  </h4>
                  <p className="text-sm text-purple-700 leading-relaxed">
                    基于心理健康领域数据进行专门训练，让通用大模型更懂临床，提供更精准的专业分析
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    🔄
                  </div>
                  <h4 className="mb-3 text-green-800 text-base">
                    持续学习进化
                  </h4>
                  <p className="text-sm text-green-700 leading-relaxed">
                    收集用户反馈构建训练数据，定期更新模型参数，形成"使用越多，越准确"的正向循环
                  </p>
                </div>
              </Card>
            </div>

            {/* 技术架构特点总结 */}
            <Card className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl mb-4 text-gray-800">
                  技术架构核心特点
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
                  <div className="bg-white/60 p-3 rounded-lg">
                    <div className="text-blue-600 mb-2 text-sm">
                      🛡️ 安全合规
                    </div>
                    <div className="text-gray-600 text-xs">
                      HIPAA标准，端到端加密
                    </div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg">
                    <div className="text-green-600 mb-2 text-sm">
                      ⚡ 实时响应
                    </div>
                    <div className="text-gray-600 text-xs">
                      秒级分析，即时反馈
                    </div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg">
                    <div className="text-purple-600 mb-2 text-sm">
                      🎯 专业精准
                    </div>
                    <div className="text-gray-600 text-xs">
                      领域微调，权威知识
                    </div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg">
                    <div className="text-orange-600 mb-2 text-sm">
                      🔄 自主进化
                    </div>
                    <div className="text-gray-600 text-xs">
                      反馈学习，持续优化
                    </div>
                  </div>
                </div>

                {/* 原型演示按钮 */}
                <div className="pt-3 border-t border-white/40">
                  <Button
                    onClick={
                      onShowPrototype
                        ? onShowPrototype
                        : () => {}
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mx-auto text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>查看MVP交互原型演示</span>
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">
                    点击体验完整的诊断工作台界面
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "MVP深度解析 - 成功衡量标准",
      backgroundColor:
        "bg-gradient-to-br from-yellow-50 to-orange-50",
      content: (
        <div className="h-full p-12 pb-20 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 py-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-gray-800">
                【MVP深度解析】成功衡量的标准
              </h1>
              <p className="text-xl text-orange-600">
                我们如何定义MVP的成功？
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white shadow-lg border-t-4 border-t-blue-500">
                <h3 className="mb-6 text-blue-800 text-xl">
                  🎯 临床有效性 (Clinical Validity)
                </h3>
                <div className="space-y-6">
                  <div className="p-5 bg-blue-50 rounded">
                    <h4 className="text-lg mb-3 text-blue-700">
                      诊断建议一致性
                    </h4>
                    <p className="text-lg text-gray-600">
                      AI的首要诊断建议与临床医生最终确认的诊断一致率
                      &gt; 70%（在特定病种范围内）
                    </p>
                  </div>
                  <div className="p-5 bg-blue-50 rounded">
                    <h4 className="text-lg mb-3 text-blue-700">
                      症状覆盖率
                    </h4>
                    <p className="text-lg text-gray-600">
                      AI提取的症状清单覆盖了医生认为关键的症状的比例
                      &gt; 90%
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white shadow-lg border-t-4 border-t-green-500">
                <h3 className="mb-6 text-green-800 text-xl">
                  💎 产品价值 (Product Value)
                </h3>
                <div className="space-y-6">
                  <div className="p-5 bg-green-50 rounded">
                    <h4 className="text-lg mb-3 text-green-700">
                      定性反馈
                    </h4>
                    <p className="text-lg text-gray-600">
                      80%以上的测试用户认为该工具"显著提升了初诊的结构性和全面性"并"增加了诊断的信心"
                    </p>
                  </div>
                  <div className="p-5 bg-green-50 rounded">
                    <h4 className="text-lg mb-3 text-green-700">
                      修订效率
                    </h4>
                    <p className="text-lg text-gray-600">
                      相比从零开始，使用AI报告进行修订所需的时间减少
                      &gt; 50%
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white shadow-lg border-t-4 border-t-purple-500">
                <h3 className="mb-6 text-purple-800 text-xl">
                  📊 用户采纳度 (Adoption)
                </h3>
                <div className="space-y-6">
                  <div className="p-5 bg-purple-50 rounded">
                    <h4 className="text-lg mb-3 text-purple-700">
                      周活跃用户 (WAU)
                    </h4>
                    <p className="text-lg text-gray-600">
                      种子用户周活跃度 &gt; 60%
                    </p>
                  </div>
                  <div className="p-5 bg-purple-50 rounded">
                    <h4 className="text-lg mb-3 text-purple-700">
                      流程完成率
                    </h4>
                    <p className="text-lg text-gray-600">
                      &gt; 95%
                      的用户能顺利完成"输入-分析-审核-确认"的完整诊断流程
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-12 bg-gradient-to-r from-orange-100 to-yellow-100 shadow-lg">
              <div className="text-center">
                <h3 className="text-3xl mb-8 text-orange-800">
                  关键成功指标
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-lg">
                  <div className="text-center">
                    <div className="text-5xl text-blue-600 mb-4">
                      70%+
                    </div>
                    <div className="text-gray-600 text-lg">
                      诊断一致性
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl text-green-600 mb-4">
                      90%+
                    </div>
                    <div className="text-gray-600 text-lg">
                      症状覆盖率
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl text-purple-600 mb-4">
                      80%+
                    </div>
                    <div className="text-gray-600 text-lg">
                      用户满意度
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl text-orange-600 mb-4">
                      50%+
                    </div>
                    <div className="text-gray-600 text-lg">
                      效率提升
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "市场与商业模式初步构想",
      backgroundColor:
        "bg-gradient-to-br from-purple-50 to-pink-50",
      content: (
        <div className="h-full p-12 pb-20 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 py-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-gray-800">
                市场与商业模式初步构想
              </h1>
              <p className="text-xl text-purple-600">
                切入点与未来商业化路径
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-10 bg-white shadow-lg border-l-4 border-l-blue-500">
                <h3 className="mb-8 text-blue-800 text-2xl">
                  🎯 目标用户 (Initial Target)
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-blue-50 rounded">
                    <h4 className="text-lg mb-3 text-blue-700">
                      独立心理诊所
                    </h4>
                    <p className="text-lg text-gray-600">
                      希望提升初诊质量和效率的中小型心理健康诊所
                    </p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded">
                    <h4 className="text-lg mb-3 text-blue-700">
                      社区心理健康中心
                    </h4>
                    <p className="text-lg text-gray-600">
                      需要标准化诊断流程和提升服务覆盖范围的机构
                    </p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded">
                    <h4 className="text-lg mb-3 text-blue-700">
                      医院精神科
                    </h4>
                    <p className="text-lg text-gray-600">
                      对初诊流程的标准化和效率有强烈需求的科室
                    </p>
                  </div>
                  <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-lg text-yellow-800">
                      <strong>核心价值：</strong>{" "}
                      这些机构对初诊流程的标准化和效率有强烈需求，是最理想的早期验证伙伴。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-10 bg-white shadow-lg border-l-4 border-l-green-500">
                <h3 className="mb-8 text-green-800 text-2xl">
                  💰 商业模式 (Business Model)
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded">
                    <h4 className="text-lg mb-3 text-gray-700">
                      MVP阶段
                    </h4>
                    <p className="text-lg text-gray-600">
                      与学术机构或标杆诊所合作进行临床验证项目，建立信誉和案例
                    </p>
                  </div>
                  <div className="p-6 bg-green-50 rounded">
                    <h4 className="text-lg mb-3 text-green-700">
                      商业化阶段
                    </h4>
                    <p className="text-lg text-gray-600">
                      B2B
                      SaaS订阅模式：按临床医生坐席或API调用量计费
                    </p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded">
                    <h4 className="text-lg mb-3 text-purple-700">
                      未来（第三阶段）
                    </h4>
                    <p className="text-lg text-gray-600">
                      面向学校、企业提供B2B2C的批量筛查服务包
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-10 bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg">
              <h3 className="text-2xl mb-8 text-center text-purple-800">
                商业化路径图
              </h3>
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                    1
                  </div>
                  <h4 className="text-lg mb-2 text-blue-700">
                    临床验证
                  </h4>
                  <p className="text-base text-gray-500">
                    与标杆机构合作验证
                  </p>
                </div>
                <div className="w-10 h-1 bg-gray-300"></div>
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                    2
                  </div>
                  <h4 className="text-lg mb-2 text-green-700">
                    SaaS订阅
                  </h4>
                  <p className="text-base text-gray-500">
                    诊所和医疗机构
                  </p>
                </div>
                <div className="w-10 h-1 bg-gray-300"></div>
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg">
                    3
                  </div>
                  <h4 className="text-lg mb-2 text-purple-700">
                    普惠服务
                  </h4>
                  <p className="text-base text-gray-500">
                    社会机构批量筛查
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "团队与资源配置",
      backgroundImage:
        "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZW50YWwlMjBoZWFsdGglMjB0aGVyYXB5JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc1ODAwMjU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content: (
        <div className="h-full p-12 pb-20 relative z-10 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8 py-4">
            <div className="text-center mb-10">
              <h1 className="text-4xl mb-4 text-white">
                团队与资源配置
              </h1>
              <p className="text-xl text-blue-200">
                整合专业资源，组建跨学科专业团队
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-10 bg-white/90 backdrop-blur-sm shadow-lg">
                <h3 className="mb-8 text-gray-800 text-2xl">
                  👥 核心团队构成
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-blue-50 rounded">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 text-lg">
                      👨‍⚕️
                    </div>
                    <div>
                      <h4 className="text-lg text-blue-700">
                        临床专家 (Clinical Lead)
                      </h4>
                      <p className="text-base text-gray-600">
                        精神科医生/心理治疗师
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-2 bg-green-50 rounded">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">
                      📋
                    </div>
                    <div>
                      <h4 className="text-xs text-green-700">
                        产品经理 (Product Manager)
                      </h4>
                      <p className="text-xs text-gray-600">
                        负责产品规划与用户体验
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-2 bg-purple-50 rounded">
                    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">
                      🤖
                    </div>
                    <div>
                      <h4 className="text-xs text-purple-700">
                        AI/ML工程师 (AI/ML Lead)
                      </h4>
                      <p className="text-xs text-gray-600">
                        负责算法开发与模型优化
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-2 bg-orange-50 rounded">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">
                      💻
                    </div>
                    <div>
                      <h4 className="text-xs text-orange-700">
                        全栈工程师 (Full-Stack Engineer)
                      </h4>
                      <p className="text-xs text-gray-600">
                        负责平台开发与系统架构
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-2 bg-red-50 rounded">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-xs">
                      ⚖️
                    </div>
                    <div>
                      <h4 className="text-xs text-red-700">
                        合规/法律顾问 (Part-time)
                      </h4>
                      <p className="text-xs text-gray-600">
                        确保HIPAA等法规合规性
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-10 bg-white/90 backdrop-blur-sm shadow-lg">
                <h3 className="mb-8 text-gray-800 text-2xl">
                  💼 资源配置方案
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-green-50 border border-green-200 rounded">
                    <h4 className="text-lg mb-3 text-green-800">
                      🏢 研发资源投入
                    </h4>
                    <p className="text-base text-gray-600 mb-3">
                      组织专业技术团队，专注9-12个月MVP开发与验证。
                    </p>
                    <div className="text-base text-green-700 bg-green-100 p-3 rounded">
                      技术人员、计算资源、开发工具配置
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="text-lg mb-3 text-blue-800">
                      🏥 临床合作伙伴
                    </h4>
                    <p className="text-base text-gray-600 mb-3">
                      与临床机构合作，进行安全的数据验证和产品测试。
                    </p>
                    <div className="text-base text-blue-700 bg-blue-100 p-3 rounded">
                      建立临床验证环境，获得真实用户反馈
                    </div>
                  </div>

                  <div className="p-6 bg-purple-50 border border-purple-200 rounded">
                    <h4 className="text-lg mb-3 text-purple-800">
                      ☁️ 基础设施支持
                    </h4>
                    <p className="text-base text-gray-600 mb-3">
                      利用云平台和AI训练资源，确保项目高效推进。
                    </p>
                    <div className="text-base text-purple-700 bg-purple-100 p-3 rounded">
                      云服务、GPU资源、数据存储与安全
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-lg">
              <h3 className="text-center text-2xl mb-6 text-gray-800">
                关键里程碑时间线
              </h3>
              <div className="flex items-center justify-between text-base">
                <div className="text-center">
                  <div className="text-blue-600 mb-2 text-lg">
                    Month 1-2
                  </div>
                  <div className="text-gray-600">团队组建</div>
                </div>
                <div className="w-10 h-1 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-green-600 mb-2 text-lg">
                    Month 3-5
                  </div>
                  <div className="text-gray-600">MVP开发</div>
                </div>
                <div className="w-10 h-1 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-purple-600 mb-2 text-lg">
                    Month 6-7
                  </div>
                  <div className="text-gray-600">内测验证</div>
                </div>
                <div className="w-10 h-1 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-orange-600 mb-2 text-lg">
                    Month 8-9
                  </div>
                  <div className="text-gray-600">产品完善</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      title: "总结与问答",
      backgroundColor:
        "bg-gradient-to-br from-indigo-900 to-purple-900",
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center text-white relative z-10 pb-20">
          <div className="space-y-12 max-w-5xl px-8">
            <div>
              <h1 className="text-5xl mb-8 leading-tight">
                总结与问答
              </h1>
              <h2 className="text-3xl mb-6 text-blue-200">
                加入我们，共同开启心理健康服务的新纪元
              </h2>
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
                <div className="text-base">创新技术</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-base">人机协同</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="text-2xl mb-2">🌟</div>
                <div className="text-base">未来可期</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // 键盘导航
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "Escape") {
        setIsAutoPlay(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () =>
      window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  // 自动播放
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev < slides.length - 1 ? prev + 1 : 0,
        );
      }, 10000); // 10秒自动切换
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < slides.length - 1 ? prev + 1 : prev,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
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
          <div
            className={`w-full h-full ${currentSlideData.backgroundColor || "bg-white"}`}
          ></div>
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
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
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
            {isAutoPlay ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* 进度条 */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Progress
          value={((currentSlide + 1) / slides.length) * 100}
          className="h-1 bg-white/20"
        />
      </div>

      {/* 幻灯片计数器 */}
      <div className="absolute top-6 right-6 z-20">
        <Badge
          variant="secondary"
          className="bg-white/10 backdrop-blur-md text-white border-white/20"
        >
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