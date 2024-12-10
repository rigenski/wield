'use client';

import { generateRandomText } from '@/utils/randomizeText';
import { useEffect, useState } from 'react';

interface RandomItem {
    id: number;
    text: string;
    top: string;
    left: string;
}

export function RandomizedTextAnimation() {
    const [items, setItems] = useState<RandomItem[]>([]);

    const getRandomPosition = () => ({
        top: `${Math.floor(Math.random() * 90)}%`, // Avoid extreme edges
        left: `${Math.floor(Math.random() * 90)}%`,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((prevItems) => {
                const newItem: RandomItem = {
                    id: Math.random(),
                    text: generateRandomText(),
                    ...getRandomPosition(),
                };

                // Maintain only 5 items at a time
                return prevItems.length < 10 ? [...prevItems, newItem] : [...prevItems.slice(1), newItem];
            });
        }, 1000); // Update every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {items.map((item) => (
                <div
                    key={item.id}
                    data-aos="fade-up"
                    className="animate-fade absolute text-lg font-bold text-white"
                    style={{
                        top: item.top,
                        left: item.left,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.25,
                    }}
                >
                    {item.text}
                </div>
            ))}
        </>
    );
}
