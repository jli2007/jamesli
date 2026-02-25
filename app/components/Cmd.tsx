"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter, usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { isMobile } from "react-device-detect";
import { FiGithub } from "react-icons/fi";
import {
  IoLogoInstagram,
  IoSearchOutline,
  IoHomeOutline,
  IoColorPaletteOutline,
  IoGlobeOutline,
  IoLeafOutline,
  IoHardwareChipOutline,
  IoCodeSlashOutline,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isShiftKeyPressed, setisShiftKeyPressed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const itemClass = `flex items-center gap-2 px-3 py-2 text-sm rounded cursor-pointer ${
    isHome
      ? "text-midBeige2/90 hover:bg-darkBeige1/40 data-[selected=true]:bg-darkBeige1/40"
      : "text-neutral-300 hover:bg-neutral-800 data-[selected=true]:bg-neutral-800"
  }`;

  // don't render on mobile
  if (isMobile) {
    return null;
  }

  // global dispatch event for open
  const handleOpen = () => {
    setOpen(true);
    window.dispatchEvent(new CustomEvent("command-palette-opened"));
  };

  // loading animation for close
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
      if (!e.shiftKey) return;

      e.preventDefault();

      switch (e.code) {
        case "Digit0":
        case "Numpad0":
          openNextLink(() => router.push("/"));
          break;
        case "Digit1":
        case "Numpad1":
          openLink(() =>
            window.open("https://www.linkedin.com/in/jamessli/", "_blank")
          );
          break;
        case "Digit2":
        case "Numpad2":
          openLink(() => window.open("https://github.com/jli2007", "_blank"));
          break;
        case "Digit3":
        case "Numpad3":
          openLink(() => window.open("https://x.com/_jamesli", "_blank"));
          break;
        case "Digit4":
        case "Numpad4":
          openLink(() =>
            window.open("https://www.instagram.com/jamesdialedin/", "_blank")
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
    <div className={`flex text-xs items-center gap-1 ml-auto ${isHome ? "text-midBeige3" : "text-neutral-500"}`}>
      <kbd
        className={`px-1.5 py-0.5 rounded ${
          isHome ? "bg-stone-800 text-midBeige2/90" : "bg-neutral-800 text-neutral-300"
        } ${isShiftKeyPressed ? "opacity-60" : "opacity-100"}`}
      >
        shift
      </kbd>
      <span>+</span>
      <kbd className={`px-1.5 py-0.5 rounded ${isHome ? "bg-stone-800 text-midBeige2/90" : "bg-neutral-800 text-neutral-300"}`}>
        {children}
      </kbd>
    </div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {showDialog && (
        <Dialog.Portal>
          <Dialog.Overlay className={`fixed inset-0 animate-fade-in z-40 ${
              isHome ? "bg-black/80" : "bg-black/60 backdrop-blur-sm"
            }`} />
          <Dialog.Content
            className={`fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-125 p-3 z-50 ${
              open ? "animate-slide-down" : "animate-slide-up"
            }`}
          >
            <Dialog.Title></Dialog.Title>
            <Command
              className={`w-full rounded-xl border-2 shadow-2xl overflow-hidden ${
                isHome
                  ? "border-darkBeige1/90 bg-darkBeige3/60 backdrop-blur-2xl"
                  : "border-neutral-700/50 bg-neutral-900/40 backdrop-blur-md"
              }`}
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
              <div className={`px-5 py-6 border-b flex items-center gap-3 ${
                isHome ? "border-stone-700" : "border-neutral-700"
              }`}>
                <img src="/jsl.png" alt="jsl" className="w-7 rounded-sm" />
                <div className="flex-1">
                  <h2 className={`font-medium ${isHome ? "text-midBeige1" : "text-white"}`}>hello@jame.li</h2>
                  <p className={`text-xs ${isHome ? "text-midBeige2/90" : "text-neutral-400"}`}>
                    use <kbd className="px-1">esc</kbd> or click outside to
                    close
                  </p>
                </div>
              </div>

              <div className={`flex items-center border-b px-4 py-4 ${
                isHome ? "border-stone-700" : "border-neutral-700"
              }`}>
                <IoSearchOutline className={`h-4 w-4 ${isHome ? "text-midBeige2/90" : "text-neutral-400"}`} />
                <Command.Input
                  placeholder="search for topics ..."
                  className={`flex-1 w-full bg-transparent px-3 text-sm focus:outline-none ${
                    isHome
                      ? "text-lightBeige placeholder:text-midBeige3"
                      : "text-white placeholder:text-neutral-500"
                  }`}
                  autoFocus={true}
                />
              </div>

              <Command.List className="max-h-75 overflow-y-auto px-3 py-4">
                <Command.Empty className={`px-5 py-4 text-sm ${isHome ? "text-midBeige2/90" : "text-neutral-400"}`}>
                  no results found.
                </Command.Empty>

                <Command.Group heading="links" className={`px-2 ${isHome ? "text-lightBeige" : "text-white"}`}>
                  <Command.Item
                    value="home jame page"
                    onSelect={() => {
                      setTimeout(
                        () => openNextLink(() => router.push("/")),
                        0
                      );
                    }}
                    className={itemClass}
                  >
                    <IoHomeOutline className="h-4 w-4" />
                    <span className="flex-1">home</span>
                    <Shortcut>0</Shortcut>
                  </Command.Item>

                  <Command.Item
                    value="linkedin profile socials james"
                    onSelect={() =>
                      openLink(() =>
                        window.open(
                          "https://www.linkedin.com/in/jamessli/",
                          "_blank"
                        )
                      )
                    }
                    className={itemClass}
                  >
                    <PiLinkedinLogo className="h-4 w-4" />
                    <span className="flex-1">linkedin</span>
                    <Shortcut>1</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="github git profile james"
                    onSelect={() =>
                      openLink(() =>
                        window.open("https://github.com/jli2007/", "_blank")
                      )
                    }
                    className={itemClass}
                  >
                    <FiGithub className="h-4 w-4" />
                    <span className="flex-1">github</span>
                    <Shortcut>2</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="x twitter profile socials james"
                    onSelect={() =>
                      openLink(() =>
                        window.open("https://x.com/_jamesli", "_blank")
                      )
                    }
                    className={itemClass}
                  >
                    <FaXTwitter className="h-4 w-4" />
                    <span className="flex-1">x</span>
                    <Shortcut>3</Shortcut>
                  </Command.Item>
                  <Command.Item
                    value="ig instagram profile socials james jamesdialedin flowstatejames"
                    onSelect={() =>
                      openLink(() =>
                        window.open(
                          "https://www.instagram.com/jamesdialedin",
                          "_blank"
                        )
                      )
                    }
                    className={itemClass}
                  >
                    <IoLogoInstagram className="h-4 w-4" />
                    <span className="flex-1">instagram (5m+ views)</span>
                    <Shortcut>4</Shortcut>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="projects" className={`px-2 mt-2 ${isHome ? "text-lightBeige" : "text-white"}`}>
                  <Command.Item
                    value="project flowboard"
                    onSelect={() =>
                      setTimeout(
                        () => openNextLink(() => router.push("/flowboard")),
                        0
                      )
                    }
                    className={itemClass}
                  >
                    <IoColorPaletteOutline className="h-4 w-4" />
                    <span className="flex-1">flowboard</span>
                  </Command.Item>

                  <Command.Item
                    value="project trivialguessr"
                    onSelect={() =>
                      setTimeout(
                        () => openNextLink(() => router.push("/trivialguessr")),
                        0
                      )
                    }
                    className={itemClass}
                  >
                    <IoGlobeOutline className="h-4 w-4" />
                    <span className="flex-1">trivialguessr</span>
                  </Command.Item>

                  <Command.Item
                    value="project phuture"
                    onSelect={() =>
                      setTimeout(
                        () => openNextLink(() => router.push("/phuture")),
                        0
                      )
                    }
                    className={itemClass}
                  >
                    <IoLeafOutline className="h-4 w-4" />
                    <span className="flex-1">phuture</span>
                  </Command.Item>

                  <Command.Item
                    value="project guideline"
                    onSelect={() =>
                      setTimeout(
                        () => openNextLink(() => router.push("/guideline")),
                        0
                      )
                    }
                    className={itemClass}
                  >
                    <IoHardwareChipOutline className="h-4 w-4" />
                    <span className="flex-1">guideline</span>
                  </Command.Item>

                  <Command.Item
                    value="project neodev neo developer league"
                    onSelect={() =>
                      setTimeout(
                        () => openNextLink(() => router.push("/neodev")),
                        0
                      )
                    }
                    className={itemClass}
                  >
                    <IoCodeSlashOutline className="h-4 w-4" />
                    <span className="flex-1">neo developer league</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
              <div className={`border-t px-3 py-4 ${isHome ? "border-stone-700" : "border-neutral-700"}`}>
                <div className={`flex items-center justify-end text-xs ${isHome ? "text-midBeige2/90" : "text-neutral-400"}`}>
                  <div className="flex items-center gap-2">
                    <span>press</span>
                    <kbd className={`px-1.5 py-0.5 rounded ${isHome ? "bg-stone-800 text-midBeige2/90" : "bg-neutral-800 text-neutral-300"}`}>
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
