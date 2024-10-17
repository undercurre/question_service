```sql
CREATE TABLE `questions` (
`id` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
`updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `user_answers` (
`id` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`user_id` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`question_id` char(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`user_answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
`score` int NOT NULL,
`answered_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
PRIMARY KEY (`id`),
FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
```
