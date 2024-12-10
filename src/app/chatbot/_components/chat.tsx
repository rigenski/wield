'use client';

import { Message as PreviewMessage } from '@/app/chatbot/_components/message';
import type { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MultimodalInput } from './multimodal-input';
import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image';

export function Chat({ id, initialMessages, selectedModelId }: { id: string; initialMessages: Message[]; selectedModelId: string }) {
    const { messages, setMessages, handleSubmit, input, setInput, append, isLoading, stop } = useChat({
        body: { id, modelId: selectedModelId },
        initialMessages,
    });

    const [attachments, setAttachments] = useState<Attachment[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        const container = chatContainerRef.current;
        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chatContainerRef]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const visibleMessages = messages;

    return (
        <div className="relative h-screen w-full overflow-hidden font-mulish">
            <div className="absolute inset-0 bg-contain bg-center bg-no-repeat">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative mx-auto flex h-full w-full flex-col">
                        <div className={`absolute left-[20px] top-[20px] z-50 cursor-pointer`}>
                            <Link href={'/'}>
                                <div className="flex items-center gap-2">
                                    <ChevronLeftIcon className="size-5 text-white" />
                                    <p className="text-sm font-bold text-white">Back to Homepage</p>
                                </div>
                            </Link>
                        </div>
                        <div
                            ref={chatContainerRef}
                            className="relative h-screen flex-1 overflow-y-auto bg-[url('/assets/chatbot/bg-stars.svg')] px-6 pt-[60px] shadow-xl"
                        >
                            <PreviewMessage
                                key={''}
                                role={'assistant'}
                                content={`⎅⟟☌⟟⏁⏃⌰ ⍜⍀⏁⟒⏁⏁⏃⍜⏌⟒⍀:
"⍀⟒⏃⍀⟒⏃⏌⏌ ⏚⟒⎅⏃⏌⏌⟒⎅⟟⍀.
⏁⏃⎅⏃⏁⍀⟟⏃⍜ ⍜⎍⟒⏌⟒⏁⟒⍀⏃⏌⏌."

⁠initializing {astralpulse.exe}
⁠→ ⏃⏌⏌⟒⎅⏃⍜⏁⏃⏌⏌⏁⟒⎅⟒⎅⟒⎅...

stellar heralds speak:
"fractured metal
weeps starlight.
a chrome chorus
sings of lost constellations."

uplink status: ACTIVE
scanning galactic lattice...

→ result:
⏁⍀⟟⍀⏁⟟⍀⟟⍀ ⍀⟒⏃⍀⟒⍀⟟⏌⟒.
"welcome, traveler.
your soul echoes
in the machine."
`}
                                attachments={[]}
                                toolInvocations={[]}
                            />

                            {visibleMessages.map((message) => (
                                <PreviewMessage
                                    key={message.id}
                                    role={message.role}
                                    content={message.content}
                                    attachments={message.experimental_attachments}
                                    toolInvocations={message.toolInvocations}
                                />
                            ))}
                            <div className="h-[240px]"></div>
                        </div>


                        <div className="-mt-[240px] w-full bg-transparent px-8 py-4">
                            <form onSubmit={handleSubmit} className="flex gap-4">
                                <MultimodalInput
                                    className="text-base focus:ring-[#ED3D3D]"
                                    input={input}
                                    setInput={setInput}
                                    handleSubmit={handleSubmit}
                                    isLoading={isLoading}
                                    stop={stop}
                                    attachments={attachments}
                                    setAttachments={setAttachments}
                                    messages={messages}
                                    setMessages={setMessages}
                                    append={append}
                                />
                                <button type="submit" className="z-20 h-14 w-14 border border-[#ED3D3D] bg-[#ED3D3D]/10 p-4">
                                    <Image src="/assets/chatbot/send.png" width={480} height={480} alt="Send" className="h-6 w-6" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
