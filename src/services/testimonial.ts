import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  service: string;
};

const TESTIMONIALS_PATH = path.join(process.cwd(), "src/data/testimonials.json");

export async function getAllTestimonials(): Promise<Array<Testimonial>> {
  try {
    const source = await fs.promises.readFile(TESTIMONIALS_PATH, "utf8");
    const testimonials = JSON.parse(source) as Array<Testimonial>;
    return testimonials;
  } catch (error) {
    console.error("Error getting all testimonials:", error);
    return [];
  }
}

export async function getTestimonialById(id: string): Promise<Nullable<Testimonial>> {
  try {
    const testimonials = await getAllTestimonials();
    return testimonials.find((testimonial) => testimonial.id === id) ?? null;
  } catch (error) {
    console.error("Error getting testimonial by id:", error);
    return null;
  }
}

export async function getTestimonialsByService(service: string): Promise<Array<Testimonial>> {
  try {
    const testimonials = await getAllTestimonials();
    return testimonials.filter((testimonial) => testimonial.service === service);
  } catch (error) {
    console.error("Error getting testimonials by service:", error);
    return [];
  }
}
