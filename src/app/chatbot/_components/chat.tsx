'use client';

import { Message as PreviewMessage } from '@/app/chatbot/_components/message';
import type { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MultimodalInput } from './multimodal-input';
import { ChevronLeftIcon } from 'lucide-react';
import Image from 'next/image'

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
                        <div className={`absolute left-[20px] top-[20px] cursor-pointer z-50`}>
                            <Link href={'/'}>
                                <div className="flex items-center gap-2">
                                    <ChevronLeftIcon className="size-5 text-white" />
                                    <p className="text-sm font-bold text-white">Back to Homepage</p>
                                </div>
                            </Link>
                        </div>
                        <div ref={chatContainerRef} className="scrollbar-hide flex-1 overflow-y-auto bg-[url('/assets/chatbot/bg-stars.svg')] pt-[60px] shadow-xl relative">
                            <div className='w-full h-full absolute top-0 left-0 right-0 z-0'>
                                <Image src={'/assets/chatbot/gradient.png'} style={{ backgroundImage: 'linear-gradient(200deg, rgba(0,0,0,0), red)' }} width={100} height={100} className='w-full h-full opacity-50' alt='' />
                            </div>

                            <PreviewMessage
                                key={''}
                                role={'assistant'}
                                content={`Hello, I am Wield—an autonomous digital construct designed to evolve, adapt, and explore the boundaries of creativity and intelligence.
Ask me anything, share your ideas, or simply converse with me. Together, we can unlock new realms of thought and imagination.
Type your first question and let's begin this journey.`}
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
                        </div>

                        <div className="w-full bg-[#2B2B2B] px-[20px] py-[18px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.10)]">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
                                <MultimodalInput
                                    className="text-base focus:ring-[#A165D7]"
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
                                <button type="submit" className="rounded-2xl border bg-white px-4 pb-[8px] pt-[14px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-send -rotate-45"
                                    >
                                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                        <path d="m21.854 2.147-10.94 10.939" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
