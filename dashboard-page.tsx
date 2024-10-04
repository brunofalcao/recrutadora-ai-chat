import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  MessageSquare, 
  Briefcase, 
  FolderOpen, 
  LogOut, 
  Settings, 
  Send, 
  PlusCircle, 
  Sparkles, 
  Moon, 
  Sun,
  Star,
  Building,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Como posso ajudar você hoje?' }
  ])
  const [input, setInput] = useState('')

  const jobOptions = [
    "Listar Candidatos Aderentes",
    "Filtrar Candidatos por Disponibilidade",
    "Mostrar Candidatos com Mais de 5 Anos de Experiência",
    "Exibir Candidatos por Localidade"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      setInput('')
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Entendi sua solicitação. Como posso ajudar mais?' }])
      }, 1000)
    }
  }

  return (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 flex flex-col border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-8">
          <MessageSquare className="mr-2 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Recrutadora.AI</h1>
        </div>
        <ScrollArea className="flex-grow mb-4">
          <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">Vagas</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded text-gray-700 dark:text-gray-300">Desenvolvedor Full Stack</li>
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded text-gray-700 dark:text-gray-300">UX Designer Senior</li>
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded text-gray-700 dark:text-gray-300">Gerente de Projetos</li>
          </ul>
          <h2 className="font-semibold mt-4 mb-2 text-gray-900 dark:text-white">Projetos</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded text-gray-700 dark:text-gray-300">Campanha de Verão</li>
            <li className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded text-gray-700 dark:text-gray-300">Expansão Internacional</li>
          </ul>
        </ScrollArea>
        <div className="mt-auto flex items-center">
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
            <AvatarFallback>RC</AvatarFallback>
          </Avatar>
          <div className="ml-2 flex-grow">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Recrutador</p>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </Button>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-end">
          <Button
            variant="outline"
            size="icon"
            className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
        <div className="flex-grow p-4 flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Como posso ajudar hoje?</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Pesquise perfis, analise candidatos, agenda entrevistas e muito mais</p>
            </div>
            <ScrollArea className="h-[400px] w-full border rounded-md p-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="text"
                placeholder="Pergunte para Ana, nossa analista de RH com IA..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg py-4 pl-4 pr-12 text-lg focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full p-2"
              >
                <Send className="h-5 w-5 text-white" />
              </Button>
            </form>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 justify-center">
              <Sparkles className="h-4 w-4" />
              <span>Ou inicie um novo projeto de recrutamento</span>
              <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                <PlusCircle className="h-4 w-4 mr-1" />
                Novo Projeto
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {jobOptions.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm py-2 px-4 rounded-full text-gray-900 dark:text-white"
                  onClick={() => setInput(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}