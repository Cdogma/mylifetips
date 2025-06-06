
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					'primary-foreground': "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					'accent-foreground': "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))"
				}
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
				heading: ["Inter", "system-ui", "sans-serif"],
			},
			fontWeight: {
				'variable': 'var(--font-weight)',
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			backdropBlur: {
				xs: '2px',
				'3xl': '64px',
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" }
				},
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" }
				},
				"scale-out": {
					"0%": { opacity: "1", transform: "scale(1)" },
					"100%": { opacity: "0", transform: "scale(0.95)" }
				},
				"slide-in": {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" }
				},
				"color-shift": {
					"0%": { opacity: "0.12", transform: "translate(0, 0)" },
					"50%": { opacity: "0.18", transform: "translate(-5%, 5%)" },
					"100%": { opacity: "0.15", transform: "translate(5%, -5%)" }
				},
				"fade-in-up": {
					"from": { opacity: "0", transform: "translateY(20px)" },
					"to": { opacity: "1", transform: "translateY(0)" }
				},
				"micro-pulse": {
					"0%, 100%": { opacity: "1", transform: "scale(1)" },
					"50%": { opacity: "0.8", transform: "scale(1.02)" }
				},
				"shimmer": {
					"0%": { backgroundPosition: "-200% 0" },
					"100%": { backgroundPosition: "200% 0" }
				},
				"float": {
					"0%, 100%": { 
						transform: "translateY(0) rotate(0deg)", 
						opacity: "0.15" 
					},
					"33%": { 
						transform: "translateY(-10px) rotate(120deg)", 
						opacity: "0.2" 
					},
					"66%": { 
						transform: "translateY(5px) rotate(240deg)", 
						opacity: "0.18" 
					}
				},
				"magnetic": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" }
				},
				"glow": {
					"0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
					"50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.4s ease-out forwards",
				"fade-out": "fade-out 0.4s ease-out forwards",
				"scale-in": "scale-in 0.3s ease-out forwards",
				"slide-in": "slide-in 0.6s ease-out forwards",
				"color-shift": "color-shift 15s infinite alternate",
				"fade-in-up": "fade-in-up 0.5s ease forwards",
				"micro-pulse": "micro-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"shimmer": "shimmer 2s linear infinite",
				"float": "float 6s ease-in-out infinite",
				"magnetic": "magnetic 0.6s ease",
				"glow": "glow 2s ease-in-out infinite alternate",
			},
			transitionTimingFunction: {
				'bounce-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			scale: {
				'102': '1.02',
				'103': '1.03',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
