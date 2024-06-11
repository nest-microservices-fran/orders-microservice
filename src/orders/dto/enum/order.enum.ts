import { OrdersStatus } from "@prisma/client";

export const OrderStatusList = [
    OrdersStatus.PENDING,
    OrdersStatus.DELIVERED,
    OrdersStatus.CANCELED
];