
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThumbsUp, Flag, ArrowDown, ArrowUp } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
  likes: number;
  userLiked?: boolean;
  replies?: Comment[];
}

interface CommentSectionProps {
  postSlug: string;
  initialComments?: Comment[];
}

const CommentSection = ({ postSlug, initialComments = [] }: CommentSectionProps) => {
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      toast({
        title: "Fehler",
        description: "Bitte gib einen Kommentar ein.",
        variant: "destructive",
      });
      return;
    }
    
    if (!name.trim()) {
      toast({
        title: "Fehler",
        description: "Bitte gib deinen Namen ein.",
        variant: "destructive",
      });
      return;
    }
    
    setSubmitting(true);
    
    // Simuliere einen API-Aufruf
    setTimeout(() => {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: name,
        content: newComment,
        date: new Date().toLocaleDateString("de-DE"),
        likes: 0,
      };
      
      setComments([newCommentObj, ...comments]);
      setNewComment("");
      setSubmitting(false);
      toast({
        title: "Erfolgreich",
        description: "Dein Kommentar wurde erfolgreich veröffentlicht.",
      });
    }, 1000);
  };
  
  const handleLikeComment = (commentId: number) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          const userLiked = !comment.userLiked;
          return {
            ...comment,
            likes: userLiked ? comment.likes + 1 : comment.likes - 1,
            userLiked,
          };
        }
        return comment;
      })
    );
  };
  
  const handleReportComment = (commentId: number) => {
    toast({
      title: "Kommentar gemeldet",
      description: "Vielen Dank für deine Meldung. Wir werden den Kommentar überprüfen.",
    });
  };
  
  const displayedComments = showAllComments ? comments : comments.slice(0, 3);

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-semibold mb-6">Kommentare ({comments.length})</h3>
      
      <form onSubmit={handleSubmitComment} className="mb-10">
        <div className="mb-6">
          <Textarea
            placeholder="Schreibe einen Kommentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="resize-none min-h-[120px]"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-Mail (wird nicht veröffentlicht)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
        
        <Button type="submit" disabled={submitting}>
          {submitting ? "Wird veröffentlicht..." : "Kommentar veröffentlichen"}
        </Button>
      </form>
      
      {comments.length > 0 ? (
        <div className="space-y-6">
          {displayedComments.map((comment) => (
            <div 
              key={comment.id} 
              className="p-4 sm:p-6 bg-muted/20 rounded-lg border border-border"
            >
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {comment.author.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-medium">{comment.author}</h4>
                    <span className="text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-foreground mb-4">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handleLikeComment(comment.id)}
                      className={`flex items-center text-sm ${
                        comment.userLiked ? "text-primary" : "text-muted-foreground hover:text-primary"
                      } transition-colors`}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1.5" />
                      <span>{comment.likes}</span>
                    </button>
                    <button 
                      onClick={() => handleReportComment(comment.id)}
                      className="flex items-center text-sm text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      <Flag className="h-4 w-4 mr-1.5" />
                      <span>Melden</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-12 mt-4 space-y-4">
                  {comment.replies.map((reply) => (
                    <div 
                      key={reply.id} 
                      className="p-4 bg-background rounded-lg border border-border"
                    >
                      <div className="flex items-start">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarFallback className="bg-secondary/10 text-secondary">
                            {reply.author.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h5 className="font-medium text-sm">{reply.author}</h5>
                            <span className="text-xs text-muted-foreground">{reply.date}</span>
                          </div>
                          <p className="text-sm text-foreground mb-3">{reply.content}</p>
                          <div className="flex items-center gap-4">
                            <button 
                              onClick={() => handleLikeComment(reply.id)}
                              className={`flex items-center text-xs ${
                                reply.userLiked ? "text-primary" : "text-muted-foreground hover:text-primary"
                              } transition-colors`}
                            >
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span>{reply.likes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {comments.length > 3 && (
            <button
              onClick={() => setShowAllComments(!showAllComments)}
              className="flex items-center mx-auto mt-6 text-primary hover:text-primary/80 transition-colors"
            >
              {showAllComments ? (
                <>
                  <ArrowUp className="h-4 w-4 mr-2" />
                  Weniger Kommentare anzeigen
                </>
              ) : (
                <>
                  <ArrowDown className="h-4 w-4 mr-2" />
                  Alle {comments.length} Kommentare anzeigen
                </>
              )}
            </button>
          )}
        </div>
      ) : (
        <div className="text-center py-10 bg-muted/20 rounded-lg border border-border">
          <h4 className="font-medium mb-2">Noch keine Kommentare</h4>
          <p className="text-muted-foreground">Hinterlasse den ersten Kommentar!</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
