import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface CommentFormProps {
  onSubmit: (name: string, comment: string) => void
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && comment) {
      onSubmit(name, comment)
      setName("")
      setComment("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input placeholder="Nama Anda" value={name} onChange={(e) => setName(e.target.value)} required />
      <Textarea
        placeholder="Tulis komentar Anda di sini"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <Button type="submit">Kirim Komentar</Button>
    </form>
  )
}

