import { describe, expect, test, it } from "bun:test";
import { sum } from "./sum";

describe("การทดสอบฟังก์ชัน", () => {
    it("ต้องบอกเลขได้", () => {
        const result = sum(10, 10);
        expect(result).toBe(20);
    });

    it("ต้องบวกเลขติดลบกันได้", () => {
        const result = sum(-13, 4);
        expect(result).toBe(-9);
    });
})
