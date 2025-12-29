import type { Request, Response } from "express";
import { checkDBHealth  } from "../repositories/healthRepo.js";

const healthController = async (req: Request, res: Response) => {
    try {
        const result = await checkDBHealth();
        res.status(200).json({
            status: "ok",
            db: "up",
            time: result.rows[0].now
        });
    } catch(error) {
        res.status(503).json({
            status: "error",
            db: "down"
        });
    }
}

export { healthController };
