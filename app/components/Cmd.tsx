// inspired by Martin Sit's CMD component : https://martinsit.ca/
"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter, usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, FileText, Home, FolderGit2, PenLine, Github, Linkedin, ExternalLink, Mail, CodeXml, Lightbulb } from "lucide-react";
import { isMobile } from 'react-device-detect';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [isModifierPressed, setIsModifierPressed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

   // don't render on mobile
  if (isMobile) {
    return null;
  }

  const handleOpen = () => {
    setOpen(true);
    window.dispatchEvent(new CustomEvent('command-palette-opened'));
  };

  // Track modifier key state
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e:any) => {
      if (e.shiftKey) {
        setIsModifierPressed(true);
      }
    };

    const handleKeyUp = (e:any) => {
      if (!e.shiftKey) {
        setIsModifierPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', () => setIsModifierPressed(false));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', () => setIsModifierPressed(false));
    };
  }, [open]);

  // Listen for event to open palette, needs event listener so can open the palette from anywhere
  useEffect(() => {
    const handleCustomOpen = () => handleOpen();
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => window.removeEventListener('open-command-palette', handleCustomOpen);
  }, []);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e:any) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!open) {
          handleOpen();
        } else {
          setOpen(false);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  // Handle keyboard shortcuts when palette is open
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e:any) => {
      // Only handle shift + key combinations
      if (!e.shiftKey) return;
      
      const key = e.key.toLowerCase();
      
      if (key === "h") {
        e.preventDefault();
        openNextLink(() => router.push("/"));
      } else if (key === "p") {
        e.preventDefault();
        openNextLink(() => router.push("/projects"));
      } else if (key === "w") {
        e.preventDefault();
        openNextLink(() => router.push("/writing"));
      } else if (key === "x") {
        e.preventDefault();
        openNextLink(() => window.open("https://x.com/_martinsit", "_blank"));
      } else if (key === "l") {
        e.preventDefault();
        openNextLink(() => window.open("https://www.linkedin.com/in/martin-sit/", "_blank"));
      } else if (key === "g") {
        e.preventDefault();
        openNextLink(() => window.open("https://github.com/martin226", "_blank"));
      } else if (key === "r") {
        e.preventDefault();
        openNextLink(() => window.open("/resume.pdf", "_blank"));
      } else if (key === "e") {
        e.preventDefault();
        openNextLink(() => window.open("mailto:martinsit288@gmail.com", "_blank"));
      } else if (key === "c") {
        e.preventDefault();
        openNextLink(() => window.open("https://github.com/martin226/v2", "_blank"));
      } else if (key === "t") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, router, pathname]);

    // regular links remain open as href target blank
    const openLink = (command:any) => {
      setOpen(true);
      command();
    };
  
    // next links close as it redirects to a different page
    const openNextLink = (command:any) => {
      setOpen(false);
      command();
    }

  const Shortcut: React.FC<{ children: any }> = ({ children }) => (
    <div className="flex text-xs items-center gap-1 ml-auto text-stone-500 dark:text-stone-500">
      {!isModifierPressed && (
        <>
          <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 font-mono text-stone-600 dark:text-stone-400">
            shift
          </kbd>
          <span>+</span>
        </>
      )}
      <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 font-mono text-stone-600 dark:text-stone-400">
        {children}
      </kbd>
    </div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-fade-in z-40" />
        <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[500px] p-3 animate-slide-down z-50">
        <Dialog.Title>cmd dialog</Dialog.Title>
          <Command 
            className="w-full rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 shadow-2xl overflow-hidden"
            loop={true}
            shouldFilter={true}
            onClick={(e) => {
              // Get the search input element
              const input = e.currentTarget.querySelector('input');
              if (input) {
                input.focus();
              }
            }}
          >
              <div className="px-5 py-6 border-b border-stone-200 dark:border-stone-700 flex items-center gap-3">
                  <img src={"/jsl.png"} alt="jsl" className="w-7 rounded-sm" />
                <div className="flex-1">
                  <h2 className="font-medium text-stone-900 dark:text-stone-100">cmd</h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400"></p>
                </div>
              </div>
            

            <div className="flex items-center border-b border-stone-300 dark:border-stone-700 px-4 py-4">
              <Search className="h-4 w-4 text-stone-500 dark:text-stone-400" />
              <Command.Input
                placeholder="Search for actions..."
                className="flex-1 w-full bg-transparent px-3 text-sm text-stone-800 dark:text-stone-200 placeholder:text-stone-500 dark:placeholder:text-stone-500 focus:outline-none"
                onBlur={(e) => {
                  // Only close if clicking outside the command palette dialog
                  const commandDialog = e.currentTarget.closest('[role="dialog"]');
                  if (!commandDialog?.contains(e.relatedTarget)) {
                    setOpen(false);
                  }
                }}
                autoFocus
              />
            </div>

            <Command.List className="max-h-[300px] overflow-y-auto px-3 py-4">
              <Command.Empty className="px-5 py-4 text-sm text-stone-500 dark:text-stone-400">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation" className="px-2 text-stone-500 dark:text-stone-400">
                <Command.Item
                  value="home"
                  onSelect={() => openNextLink(() => router.push("/"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <Home className="h-4 w-4" />
                  <span className="flex-1">Go to Home</span>
                  <Shortcut>H</Shortcut>
                </Command.Item>
                <Command.Item
                  value="projects"
                  onSelect={() => openNextLink(() => router.push("/projects"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <FolderGit2 className="h-4 w-4" />
                  <span className="flex-1">Go to Projects</span>
                  <Shortcut>P</Shortcut>
                </Command.Item>
                <Command.Item
                  value="writing"
                  onSelect={() => openNextLink(() => router.push("/writing"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <PenLine className="h-4 w-4" />
                  <span className="flex-1">Go to Writing</span>
                  <Shortcut>W</Shortcut>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Links" className="px-2 text-stone-500 dark:text-stone-400">
                <Command.Item
                  value="twitter"
                  onSelect={() => openNextLink(() => window.open("https://x.com/_martinsit", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <span className="flex-1">X Profile</span>
                  <Shortcut>X</Shortcut>
                </Command.Item>
                <Command.Item
                  value="linkedin"
                  onSelect={() => openNextLink(() => window.open("https://www.linkedin.com/in/martin-sit/", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="flex-1">LinkedIn Profile</span>
                  <Shortcut>L</Shortcut>
                </Command.Item>
                <Command.Item
                  value="github"
                  onSelect={() => openNextLink(() => window.open("https://github.com/martin226", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <Github className="h-4 w-4" />
                  <span className="flex-1">GitHub Profile</span>
                  <Shortcut>G</Shortcut>
                </Command.Item>
                <Command.Item
                  value="resume"
                  onSelect={() => openNextLink(() => window.open("/resume.pdf", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <FileText className="h-4 w-4" />
                  <span className="flex-1">Resume</span>
                  <Shortcut>R</Shortcut>
                </Command.Item>
                <Command.Item
                  value="email"
                  onSelect={() => openNextLink(() => window.open("mailto:martinsit288@gmail.com", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <Mail className="h-4 w-4" />
                  <span className="flex-1">Email</span>
                  <Shortcut>E</Shortcut>
                </Command.Item>
                <Command.Item
                  value="source"
                  onSelect={() => openNextLink(() => window.open("https://github.com/martin226/v2", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 dark:text-stone-400 rounded hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800"
                >
                  <CodeXml className="h-4 w-4" />
                  <span className="flex-1">Website Repository</span>
                  <Shortcut>C</Shortcut>
                </Command.Item>
              </Command.Group>
            </Command.List>
            <div className="border-t border-stone-200 dark:border-stone-700 px-3 py-4">
              <div className="flex items-center justify-between text-stone-500 dark:text-stone-400 text-xs">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-3 w-3" />
                  <span>Type</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 font-mono text-stone-600 dark:text-stone-400">↵</kbd>
                  <span>to select</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Press</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 font-mono text-stone-600 dark:text-stone-400">esc</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 