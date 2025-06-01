
import { Facebook, Instagram, MessageCircle, Twitter, Linkedin } from "lucide-react";
import { getFeatureFlags } from "@/config/environment";

const SocialMedia = () => {
  const flags = getFeatureFlags();

  if (!flags.showSocialMedia) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      {flags.showFacebookLink && (
        <a 
          href="https://facebook.com/mylifetips" 
          className="text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
      )}
      {flags.showInstagramLink && (
        <a 
          href="https://instagram.com/mylifetips" 
          className="text-gray-600 hover:text-pink-600 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      )}
      <a 
        href="https://twitter.com/mylifetips" 
        className="text-gray-600 hover:text-blue-400 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a 
        href="https://linkedin.com/company/mylifetips" 
        className="text-gray-600 hover:text-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      {flags.showWhatsAppButton && (
        <a 
          href="https://wa.me/491234567890" 
          className="text-gray-600 hover:text-green-600 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
