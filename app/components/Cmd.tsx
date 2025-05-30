// inspired by Martin Sit's CMD component : https://martinsit.ca/
"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { isMobile } from "react-device-detect";
import { MdOutlinePlace, MdAlternateEmail } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import {
  IoLogoInstagram,
  IoSearchOutline,
  IoLogoLinkedin,
  IoHomeOutline,
} from "react-icons/io5";
import { GoRepo } from "react-icons/go";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isShiftKeyPressed, setisShiftKeyPressed] = useState(false);
  const router = useRouter();

  // don't render on mobile
  if (isMobile) {
    return null;
  }

  // handle open with global dispatch event
  const handleOpen = () => {
    setOpen(true);
    window.dispatchEvent(new CustomEvent("command-palette-opened"));
  };

  // set timeout on close for loading animation
  useEffect(() => {
    if (open) {
      setShowDialog(true);
    } else {
      const timeout = setTimeout(() => setShowDialog(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // tracks modifier key state when cmd is open
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: any) => {
      if (e.shiftKey) {
        setisShiftKeyPressed(true);
      }
    };

    const handleKeyUp = (e: any) => {
      if (!e.shiftKey) {
        setisShiftKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [open]);

  // listen for event to open palette, needs event listener so can open the palette globally
  useEffect(() => {
    const handleCustomOpen = () => handleOpen();
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () =>
      window.removeEventListener("open-command-palette", handleCustomOpen);
  }, []);

  // toggle the menu when ⌘K / crtlK is pressed
  useEffect(() => {
    const down = (e: any) => {
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

  // handle keyboard shortcuts when cmd is open
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: any) => {
      // only handle shift + number combinations
      if (!e.shiftKey) return;

      e.preventDefault();

      switch (e.code) {
        case "Digit0":
        case "Numpad0":
          openNextLink(() => router.push("/"));
          break;

        case "Digit1":
        case "Numpad1":
          openNextLink(() => router.push("/projects"));
          break;

        case "Digit2":
        case "Numpad2":
          openNextLink(() => router.push("/notes"));
          break;

        case "Digit3":
        case "Numpad3":
          openNextLink(() => router.push("/notes/places"));
          break;
        case "Digit4":
        case "Numpad4":
          openLink(() =>
            window.open(
              "https://www.linkedin.com/in/james-siyuan-li/",
              "_blank"
            )
          );
          break;
        case "Digit5":
        case "Numpad5":
          openLink(() => window.open("https://github.com/JLi2007", "_blank"));
          break;
        case "Digit6":
        case "Numpad6":
          openLink(() => window.open("/resume.pdf", "_blank"));
          break;
        case "Digit7":
        case "Numpad7":
          openLink(() => window.open("mailto:hello@jame.li", "_blank"));
          break;
        case "Digit8":
        case "Numpad8":
          openLink(() =>
            window.open("https://www.instagram.com/_james_li/", "_blank")
          );
          break;
        case "Digit9":
        case "Numpad9":
          openLink(() =>
            window.open("https://github.com/JLi2007/JamesLi", "_blank")
          );
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, router]);

  // regular links remain open as href target blank
  const openLink = (command: any) => {
    setOpen(true);
    command();
  };

  // next links close as it redirects to a different page
  const openNextLink = (command: any) => {
    setOpen(false);
    command();
  };

  const Shortcut: React.FC<{ children: any }> = ({ children }) => (
    <div className="flex text-xs items-center gap-1 ml-auto text-midBeige3">
      <kbd
        className={`px-1.5 py-0.5 rounded bg-stone-800 text-midBeige2/90 ${
          isShiftKeyPressed ? "opacity-40" : "opacity-100"
        }`}
      >
        shift
      </kbd>
      <span>+</span>
      <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-midBeige2/90">
        {children}
      </kbd>
    </div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {showDialog && (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-fade-in z-40" />
          <Dialog.Content
            className={`fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[500px] p-3 z-50 ${
              open ? "animate-slide-down" : "animate-slide-up"
            }`}
          >
            <Dialog.Title></Dialog.Title>
            <Command
              className="w-full rounded-xl border-2 border-darkBeige1/90 bg-stone-900 shadow-2xl overflow-hidden"
              loop={true}
              shouldFilter={true}
              onClick={(e) => {
                // focus search input element when click anywhere on cmd
                const input = e.currentTarget.querySelector("input");
                if (input) {
                  input.focus();
                }
              }}
            >
              <div className="px-5 py-6 border-b border-stone-700 flex items-center gap-3">
                <img src="/jsl.png" alt="jsl" className="w-7 rounded-sm" />
                <div className="flex-1">
                  <h2 className="font-medium text-midBeige1">cmd palette</h2>
                  <p className="text-xs text-midBeige2/90">
                    use <kbd className="px-1">esc</kbd> or click outside to
                    close
                  </p>
                </div>
              </div>

              <div className="flex items-center border-b border-stone-700 px-4 py-4">
                <IoSearchOutline className="h-4 w-4 text-midBeige2/90" />
                <Command.Input
                  placeholder="search for topics ..."
                  className="flex-1 w-full bg-transparent px-3 text-sm text-lightBeige placeholder:text-midBeige3 focus:outline-none"
                  autoFocus={true}
                />
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto px-3 py-4">
                <Command.Empty className="px-5 py-4 text-sm text-midBeige2/90">
                  no results found.
                </Command.Empty>

                <Command.Group
                  heading="pinned"
                  className="px-2 text-lightBeige"
                >
                  <Command.Item
                    value="home"
                    onSelect={() => {
                      setTimeout(() => openNextLink(() => router.push("/projects")), 0);
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <IoHomeOutline className="h-4 w-4" />
                    <span className="flex-1">home</span>
                    <Shortcut>0</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="projects"
                    onSelect={() =>
                      openNextLink(() => router.push("/projects"))
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <LiaProjectDiagramSolid className="h-4 w-4" />
                    <span className="flex-1">projects</span>
                    <Shortcut>1</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="notes"
                    onSelect={() => openNextLink(() => router.push("/notes"))}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <TfiWrite className="h-4 w-4" />
                    <span className="flex-1">notes</span>
                    <Shortcut>2</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="places"
                    onSelect={() => {
                      sessionStorage.setItem(
                        "postDate",
                        "march 8, 2025 -> present"
                      );
                      sessionStorage.setItem(
                        "postTitle",
                        "places of the world 📍"
                      );
                      openNextLink(() => router.push("/notes/places"));
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <MdOutlinePlace className="h-4 w-4" />
                    <span className="flex-1">
                      perplexing places
                    </span>
                    <Shortcut>3</Shortcut>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="links" className="px-2 text-lightBeige">
                  <Command.Item
                    value="linkedin_profile"
                    onSelect={() =>
                      openLink(() =>
                        window.open(
                          "https://www.linkedin.com/in/james-siyuan-li/",
                          "_blank"
                        )
                      )
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <IoLogoLinkedin className="h-4 w-4" />
                    <span className="flex-1">linkedin</span>
                    <Shortcut>4</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="github_profile"
                    onSelect={() =>
                      openLink(() =>
                        window.open("https://github.com/JLi2007/", "_blank")
                      )
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <FiGithub className="h-4 w-4" />
                    <span className="flex-1">github</span>
                    <Shortcut>5</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="resume"
                    onSelect={() =>
                      openLink(() => window.open("/resume.pdf", "_blank"))
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <GrNotes className="h-4 w-4" />
                    <span className="flex-1">resume</span>
                    <Shortcut>6</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="email"
                    onSelect={() =>
                      openLink(() =>
                        window.open("mailto:hello@jame.li", "_blank")
                      )
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <MdAlternateEmail className="h-4 w-4" />
                    <span className="flex-1">hello@jame.li</span>
                    <Shortcut>7</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="instagram_profile"
                    onSelect={() =>
                      openLink(() =>
                        window.open(
                          "https://www.instagram.com/_james_li/",
                          "_blank"
                        )
                      )
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <IoLogoInstagram className="h-4 w-4" />
                    <span className="flex-1">instagram</span>
                    <Shortcut>8</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="website_repository"
                    onSelect={() =>
                      openLink(() =>
                        window.open(
                          "https://github.com/JLi2007/JamesLi",
                          "_blank"
                        )
                      )
                    }
                    className="flex items-center gap-2 px-3 py-2 text-sm text-midBeige2/90 rounded hover:bg-stone-800 cursor-pointer data-[selected=true]:bg-stone-800"
                  >
                    <GoRepo className="h-4 w-4" />
                    <span className="flex-1">website repository</span>
                    <Shortcut>9</Shortcut>
                  </Command.Item>
                </Command.Group>
              </Command.List>
              <div className="border-t border-stone-700 px-3 py-4">
                <div className="flex items-center justify-between text-midBeige2/90 text-xs">
                  <div className="flex items-center gap-2">
                    <span>use</span>
                    <kbd className="px-0.5 py-0.5 rounded bg-stone-800 text-midBeige2/90">
                      ↑
                    </kbd>
                    |
                    <kbd className="px-0.5 py-0.5 rounded bg-stone-800 text-midBeige2/90">
                      ↓
                    </kbd>
                    <span>to toggle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>press</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-midBeige2/90">
                      ↵
                    </kbd>
                    <span>to open</span>
                  </div>
                </div>
              </div>
            </Command>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}
