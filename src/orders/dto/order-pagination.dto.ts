import { IsEnum, IsOptional } from "class-validator";
import { OrdersStatus } from "@prisma/client";
import { PaginationDto } from "../../common";
import { OrderStatusList } from "../enum/order.enum";

export class OrderPaginationDto extends PaginationDto {
    @IsOptional()
    @IsEnum(OrderStatusList, {
        message: `Valid status are ${OrderStatusList}`
    })
    status: OrdersStatus;
}