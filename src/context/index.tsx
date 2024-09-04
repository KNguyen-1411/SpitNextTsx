"use client";
import { createContext, useContext, useState } from "react";
import NewData from "@/data/news.json";
import QA from "@/data/qa.json";
import Members from "@/data/members.json";

const AppContext = createContext(
  {} as {
    news: Array<{
      title: string;
      content: string;
      imgSrc: string;
      linkto: string;
    }>;
    hotNews: Array<{
      title: string;
      imgSrc: string;
      linkto: string;
      hh: string;
    }>;
    qas: Array<{ question: string; answer: string }>;
    members: Array<{
      member: Array<{
        name: string;
        gender: number;
        sdt: number;
        gmail: string;
        class: string;
        role: Array<{ name: string }>;
        achievement: Array<{ name: string }>;
        img: string;
      }>;
    }>;
  }
);

export function AppData({ children }: { children: React.ReactNode }) {
  const [news] = useState<
    Array<{
      title: string;
      content: string;
      imgSrc: string;
      linkto: string;
    }>
  >(NewData.newsData);

  const [hotNews] = useState<
    Array<{
      title: string;
      imgSrc: string;
      linkto: string;
      hh: string;
    }>
  >(NewData.hotNews);

  const [qas] = useState<Array<{ question: string; answer: string }>>(QA);

  const [members] = useState<
    Array<{
      member: Array<{
        name: string;
        gender: number;
        sdt: number;
        gmail: string;
        class: string;
        role: Array<{ name: string }>;
        achievement: Array<{ name: string }>;
        img: string;
      }>;
    }>
  >(Members.map((item) => ({ member: item.members })));

  return (
    <AppContext.Provider value={{ news, hotNews, qas, members }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppContext);
}
