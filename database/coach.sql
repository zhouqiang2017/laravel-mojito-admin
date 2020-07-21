/*
 Navicat Premium Data Transfer

 Source Server         : cncould
 Source Server Type    : MySQL
 Source Server Version : 50644
 Source Host           : 118.190.215.201:3306
 Source Schema         : coach

 Target Server Type    : MySQL
 Target Server Version : 50644
 File Encoding         : 65001

 Date: 21/07/2020 10:29:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_users
-- ----------------------------
DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE `admin_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of admin_users
-- ----------------------------
BEGIN;
INSERT INTO `admin_users` VALUES (1, 'admin', 'admin@gmail.com', '$2y$10$Pp6JjWYVNb/5AAEitNndZ.OMaY9H1cn5mMoH1eWYxNCxkv.YeB0EC', NULL, '2020-07-16 18:47:16', '2020-07-19 16:22:51');
INSERT INTO `admin_users` VALUES (2, '测试人员', '12345678@qq.com', '$2y$10$Vp5EI7fqTmfZFPNlonqci.eN8kJozOavnSsgoZ8Ne8y0xrmbALT.K', NULL, '2020-07-16 18:52:48', '2020-07-16 18:52:48');
COMMIT;

-- ----------------------------
-- Table structure for banners
-- ----------------------------
DROP TABLE IF EXISTS `banners`;
CREATE TABLE `banners` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '名',
  `intro` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '地址',
  `sequence` tinyint(4) NOT NULL DEFAULT '0' COMMENT '排序值，值大在前',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1:内链 2：外联',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '-1：删除 0：禁用 1：使用',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of banners
-- ----------------------------
BEGIN;
INSERT INTO `banners` VALUES (1, '第一张', '好看', '/uploads/images/banners/202007/16/1_1594888643_QQ4DjmABhY.jpeg', 10, 1, 1, '2020-07-16 16:37:30', '2020-07-17 00:16:38');
INSERT INTO `banners` VALUES (2, '第二张1', '还是好看1', '/uploads/images/banners/202007/16/1_1594915112_F5CtU4vuo5.jpeg', 0, 1, 0, '2020-07-16 16:47:31', '2020-07-17 00:00:32');
INSERT INTO `banners` VALUES (3, '第三张', '很好看', '/uploads/images/banners/202007/16/1_1594889374_QSv55vsiUa.jpeg', 0, 1, -1, '2020-07-16 16:49:40', '2020-07-16 17:39:34');
COMMIT;

-- ----------------------------
-- Table structure for coachs
-- ----------------------------
DROP TABLE IF EXISTS `coachs`;
CREATE TABLE `coachs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL COMMENT '用户id',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '姓名',
  `gender` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1: 男；2：女',
  `age` tinyint(4) NOT NULL COMMENT '年龄',
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '联系电话',
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '地址',
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '经纬度，用“,”隔开',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '头像',
  `front` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '身份证正面',
  `rear` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '身份证反面',
  `handpiece` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '手持身份证',
  `coach_card` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '教练证',
  `no_crime` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '无犯罪证明',
  `service_fee` decimal(8,2) NOT NULL COMMENT '收费标准',
  `intro` text COLLATE utf8mb4_unicode_ci COMMENT '一句介绍',
  `level` tinyint(4) NOT NULL DEFAULT '5' COMMENT '等级，默认5星',
  `tag` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '标签',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '-1：删除 0：待审核 1：驳回 2：审核通过 3：禁用 4:过期',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of coachs
-- ----------------------------
BEGIN;
INSERT INTO `coachs` VALUES (2, 1, '周武王', 1, 18, '17388886666', '四川省成都市西部国际金融中心', '104.083588,30.648569', '/uploads/images/banners/202007/20/1_1595240293_inziItRUPR.jpg', '/uploads/images/seniors/202007/20/1_1595228681_2m8MELqyTd.png', '/uploads/images/seniors/202007/20/1_1595228681_2m8MELqyTd.png', '/uploads/images/seniors/202007/20/1_1595228681_2m8MELqyTd.png', '/uploads/images/seniors/202007/20/1_1595228681_2m8MELqyTd.png', '/uploads/images/seniors/202007/20/1_1595228681_2m8MELqyTd.png', 50.00, '帅得雅痞', 5, '幽默#浪漫', 1, '2020-07-20 14:30:54', '2020-07-20 14:30:54');
COMMIT;

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for high_seniors
-- ----------------------------
DROP TABLE IF EXISTS `high_seniors`;
CREATE TABLE `high_seniors` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '标题',
  `intro` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '简介',
  `cover` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '图片',
  `regular` text COLLATE utf8mb4_unicode_ci COMMENT '规则',
  `sequence` tinyint(4) NOT NULL DEFAULT '0' COMMENT '排序值，值大在前',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1:正常 2：列外',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '-1：删除 0：禁用 1：使用',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of high_seniors
-- ----------------------------
BEGIN;
INSERT INTO `high_seniors` VALUES (1, '200米跑', '用发令枪发令，起跑姿势不限', '/uploads/images/banners/202007/20/1_1595226603_5kp3eZIKe4.png', '1．场地及器材：原则上在400米田径场进行。使用电子计时设备（采用2套系统同步计时）。\n2．考试方法：用发令枪发令，起跑姿势不限，可使用钉鞋。参照田径规则相关条款执行。', 99, 1, 1, '2020-07-20 14:30:54', '2020-07-20 15:02:20');
INSERT INTO `high_seniors` VALUES (3, '掷实心球', '球体为生效铸造，球体内不得有滚动物体', '/uploads/images/seniors/202007/20/1_1595228681_2m8MELqyTd.png', '1. 使劲甩。', 98, 1, 1, '2020-07-20 15:06:44', '2020-07-20 15:06:44');
COMMIT;

-- ----------------------------
-- Table structure for members
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nickname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '昵称',
  `openid` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'openid',
  `session_key` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'session_key',
  `union_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'union_id',
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '联系电话',
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '性别',
  `district` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '所在区域',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '头像',
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '经纬度，用“,”隔开',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0：禁用，1：启用',
  `balance` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '余额',
  `cash` decimal(8,2) NOT NULL DEFAULT '0.00' COMMENT '可提现',
  `is_coach` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0：不是 1：已申请，2：已是',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of members
-- ----------------------------
BEGIN;
INSERT INTO `members` VALUES (1, 'onepiece', 'oaV5I46R8KIWNrCndZ9oJYjPjbR0', 'o8G0DwaQjqQMDFYkL9lmgIaOj95g', NULL, '17388886666', '1', '四川-成都', 'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eob3dABI3SGgicKibSchIicbSV0F7LsBCCmc6DKfH9tbEwia8EcZ4WX7m1Z4T8RBTQx6LQDXIG3Za8iaPA/132', '104.083588,30.648569', 1, 0.00, 0.00, 0, '2020-06-24 17:28:28', '2020-06-24 17:28:28');
COMMIT;

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uri` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_link` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0-no;1-yes',
  `permission_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sequence` smallint(6) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of menus
-- ----------------------------
BEGIN;
INSERT INTO `menus` VALUES (1, 0, 'mofont mo-icon-dashboard mo-menu', '/admin/dashboard', 0, NULL, '首页', 'admin', 99, NULL, '2020-07-17 00:26:03');
INSERT INTO `menus` VALUES (2, 0, 'el-icon-s-tools', '/admin/admin', 0, NULL, '系统设置', 'admin', 0, NULL, NULL);
INSERT INTO `menus` VALUES (3, 2, '', '/admin/admin-user', 0, NULL, '系统管理员', 'admin', 0, NULL, NULL);
INSERT INTO `menus` VALUES (4, 2, '', '/admin/role', 0, NULL, '角色', 'admin', 0, NULL, NULL);
INSERT INTO `menus` VALUES (5, 2, '', '/admin/permission', 0, NULL, '权限', 'admin', 0, NULL, NULL);
INSERT INTO `menus` VALUES (6, 2, '', '/admin/permission-group', 0, NULL, '权限组', 'admin', 0, NULL, NULL);
INSERT INTO `menus` VALUES (7, 2, '', '/admin/menu', 0, NULL, '菜单', 'admin', 0, NULL, NULL);
INSERT INTO `menus` VALUES (8, 0, 'el-icon-picture', '/admin/banner', 0, NULL, '横幅', 'admin', 98, '2020-07-16 18:12:30', '2020-07-16 18:12:30');
INSERT INTO `menus` VALUES (9, 0, 'el-icon-basketball', '/admin/senior', 0, NULL, '中考体育', 'admin', 97, '2020-07-20 13:25:58', '2020-07-20 13:25:58');
INSERT INTO `menus` VALUES (10, 0, 'mofont mo-icon-admin mo-menu', '/admin/member', 0, NULL, '用户管理', 'admin', 80, '2020-07-20 17:30:31', '2020-07-20 17:30:31');
COMMIT;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
BEGIN;
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (4, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (5, '2020_07_14_224957_create_permission_tables', 1);
INSERT INTO `migrations` VALUES (6, '2020_07_14_224958_create_admin_table', 1);
INSERT INTO `migrations` VALUES (7, '2020_07_14_224959_add_custom_field_permission_tables', 1);
INSERT INTO `migrations` VALUES (8, '2020_07_14_225000_create_menu_table', 1);
INSERT INTO `migrations` VALUES (9, '2020_07_14_225001_create_permission_group_table', 1);
INSERT INTO `migrations` VALUES (10, '2020_07_15_162208_create_banners_table', 1);
INSERT INTO `migrations` VALUES (11, '2020_07_20_104101_create_high_senior_table', 2);
INSERT INTO `migrations` VALUES (12, '2020_07_20_152635_create_coach_table', 3);
INSERT INTO `migrations` VALUES (13, '2020_07_20_160548_create_source_stores_table', 3);
INSERT INTO `migrations` VALUES (14, '2020_07_20_162828_create_members_table', 4);
COMMIT;

-- ----------------------------
-- Table structure for model_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `model_has_permissions`;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model_has_permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for model_has_roles
-- ----------------------------
DROP TABLE IF EXISTS `model_has_roles`;
CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) unsigned NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of model_has_roles
-- ----------------------------
BEGIN;
INSERT INTO `model_has_roles` VALUES (1, 'Moell\\Mojito\\Models\\AdminUser', 1);
COMMIT;

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permission_groups
-- ----------------------------
DROP TABLE IF EXISTS `permission_groups`;
CREATE TABLE `permission_groups` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permission_groups
-- ----------------------------
BEGIN;
INSERT INTO `permission_groups` VALUES (1, 'Admin users', NULL, NULL);
INSERT INTO `permission_groups` VALUES (2, 'Role', NULL, NULL);
INSERT INTO `permission_groups` VALUES (3, 'Permission', NULL, NULL);
INSERT INTO `permission_groups` VALUES (4, 'Menu', NULL, NULL);
INSERT INTO `permission_groups` VALUES (5, 'Permission groups', NULL, NULL);
INSERT INTO `permission_groups` VALUES (6, 'Banner', '2020-07-16 18:13:03', '2020-07-16 18:13:03');
INSERT INTO `permission_groups` VALUES (7, '中考体育', '2020-07-20 13:26:31', '2020-07-20 13:26:31');
INSERT INTO `permission_groups` VALUES (8, '用户管理', '2020-07-20 17:33:36', '2020-07-20 17:33:36');
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `pg_id` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sequence` smallint(6) DEFAULT NULL,
  `created_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
INSERT INTO `permissions` VALUES (1, 'admin-user.index', 'admin', '2020-07-16 18:47:17', '2020-07-16 18:47:17', 1, 'index', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (2, 'admin-user.show', 'admin', '2020-07-16 18:47:17', '2020-07-16 18:47:17', 1, 'show', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (3, 'admin-user.store', 'admin', '2020-07-16 18:47:17', '2020-07-16 18:47:17', 1, 'store', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (4, 'admin-user.update', 'admin', '2020-07-16 18:47:18', '2020-07-16 18:47:18', 1, 'update', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (5, 'admin-user.destroy', 'admin', '2020-07-16 18:47:18', '2020-07-16 18:47:18', 1, 'destroy', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (6, 'admin-user.roles', 'admin', '2020-07-16 18:47:18', '2020-07-16 18:47:18', 1, 'role list', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (7, 'admin-user.assign-roles', 'admin', '2020-07-16 18:47:19', '2020-07-16 18:47:19', 1, 'assign role', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (8, 'role.index', 'admin', '2020-07-16 18:47:19', '2020-07-16 18:47:19', 2, 'index', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (9, 'role.show', 'admin', '2020-07-16 18:47:19', '2020-07-16 18:47:19', 2, 'show', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (10, 'role.store', 'admin', '2020-07-16 18:47:20', '2020-07-16 18:47:20', 2, 'store', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (11, 'role.update', 'admin', '2020-07-16 18:47:20', '2020-07-16 18:47:20', 2, 'update', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (12, 'role.destroy', 'admin', '2020-07-16 18:47:21', '2020-07-16 18:47:21', 2, 'destroy', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (13, 'role.permissions', 'admin', '2020-07-16 18:47:21', '2020-07-16 18:47:21', 2, 'role permissions', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (14, 'role.assign-permissions', 'admin', '2020-07-16 18:47:21', '2020-07-16 18:47:21', 2, 'role assignment authority', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (15, 'role.guard-name-roles', 'admin', '2020-07-16 18:47:22', '2020-07-16 18:47:22', 2, 'Specify the role of guard name', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (16, 'permission.index', 'admin', '2020-07-16 18:47:22', '2020-07-16 18:47:22', 3, 'index', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (17, 'permission.show', 'admin', '2020-07-16 18:47:22', '2020-07-16 18:47:22', 3, 'show', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (18, 'permission.store', 'admin', '2020-07-16 18:47:23', '2020-07-16 18:47:23', 3, 'store', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (19, 'permission.update', 'admin', '2020-07-16 18:47:23', '2020-07-16 18:47:23', 3, 'update', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (20, 'permission.destroy', 'admin', '2020-07-16 18:47:23', '2020-07-16 18:47:23', 3, 'destroy', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (21, 'menu.index', 'admin', '2020-07-16 18:47:24', '2020-07-16 18:47:24', 4, 'index', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (22, 'menu.show', 'admin', '2020-07-16 18:47:24', '2020-07-16 18:47:24', 4, 'show', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (23, 'menu.store', 'admin', '2020-07-16 18:47:24', '2020-07-16 18:47:24', 4, 'store', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (24, 'menu.update', 'admin', '2020-07-16 18:47:25', '2020-07-16 18:47:25', 4, 'update', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (25, 'menu.destroy', 'admin', '2020-07-16 18:47:25', '2020-07-16 18:47:25', 4, 'destroy', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (26, 'permission-group.index', 'admin', '2020-07-16 18:47:26', '2020-07-16 18:47:26', 5, 'index', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (27, 'permission-group.show', 'admin', '2020-07-16 18:47:26', '2020-07-16 18:47:26', 5, 'show', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (28, 'permission-group.store', 'admin', '2020-07-16 18:47:26', '2020-07-16 18:47:26', 5, 'store', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (29, 'permission-group.update', 'admin', '2020-07-16 18:47:27', '2020-07-16 18:47:27', 5, 'update', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (30, 'permission-group.destroy', 'admin', '2020-07-16 18:47:27', '2020-07-16 18:47:27', 5, 'destroy', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (31, 'permission-group.guard-name-for-permission', 'admin', '2020-07-16 18:47:27', '2020-07-16 18:47:27', 5, 'Guard name for permissions', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (32, 'permission-group.all', 'admin', '2020-07-16 18:47:28', '2020-07-16 18:47:28', 5, 'All permission groups', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (33, 'banner.index', 'admin', '2020-07-16 18:14:00', '2020-07-16 18:14:00', 6, 'index', NULL, 0, 'admin', NULL, 'Banner List');
INSERT INTO `permissions` VALUES (34, 'banner.store', 'admin', '2020-07-16 18:14:00', '2020-07-16 18:14:00', 6, 'store', NULL, 0, 'admin', NULL, 'Banner Create');
INSERT INTO `permissions` VALUES (35, 'banner.update', 'admin', '2020-07-16 18:14:00', '2020-07-16 18:14:00', 6, 'update', NULL, 0, 'admin', NULL, 'Banner Edit');
INSERT INTO `permissions` VALUES (36, 'banner.destroy', 'admin', '2020-07-16 18:14:00', '2020-07-16 18:14:00', 6, 'destroy', NULL, 0, 'admin', NULL, 'Banner Delete');
INSERT INTO `permissions` VALUES (37, 'banner.show', 'admin', '2020-07-16 18:14:00', '2020-07-16 18:14:00', 6, 'show', NULL, 0, 'admin', NULL, 'Banner Detail');
INSERT INTO `permissions` VALUES (38, 'senior.index', 'admin', '2020-07-20 13:28:23', '2020-07-20 13:28:23', 7, 'index', NULL, 0, 'admin', NULL, '中考体育项目列表');
INSERT INTO `permissions` VALUES (39, 'senior.store', 'admin', '2020-07-20 13:29:13', '2020-07-20 13:32:13', 7, 'store', NULL, 0, 'admin', 'admin', '创建中考体育项目');
INSERT INTO `permissions` VALUES (40, 'senior.update', 'admin', '2020-07-20 13:30:22', '2020-07-20 13:30:22', 7, 'update', NULL, 0, 'admin', NULL, '中考体育项目更新');
INSERT INTO `permissions` VALUES (41, 'senior.destroy', 'admin', '2020-07-20 13:31:09', '2020-07-20 13:31:09', 7, 'destroy', NULL, 0, 'admin', NULL, '删除中考体育项目');
INSERT INTO `permissions` VALUES (42, 'senior.show', 'admin', '2020-07-20 13:31:49', '2020-07-20 13:31:49', 7, 'show', NULL, 0, 'admin', NULL, '中考体育项目详情');
INSERT INTO `permissions` VALUES (44, 'member.index', 'admin', '2020-07-20 17:34:19', '2020-07-20 17:34:19', 8, 'index', NULL, 0, 'admin', NULL, '用户列表');
COMMIT;

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------
BEGIN;
INSERT INTO `personal_access_tokens` VALUES (7, 'Moell\\Mojito\\Models\\AdminUser', 1, 'admin', '6706ed060a60154d8c5217d5d379d1e5ab13bede25704ce37e3b38f80427c26f', '[\"*\"]', '2020-07-21 10:26:52', '2020-07-20 17:54:50', '2020-07-21 10:26:52');
COMMIT;

-- ----------------------------
-- Table structure for role_has_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_has_permissions`;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of role_has_permissions
-- ----------------------------
BEGIN;
INSERT INTO `role_has_permissions` VALUES (1, 1);
INSERT INTO `role_has_permissions` VALUES (2, 1);
INSERT INTO `role_has_permissions` VALUES (3, 1);
INSERT INTO `role_has_permissions` VALUES (4, 1);
INSERT INTO `role_has_permissions` VALUES (5, 1);
INSERT INTO `role_has_permissions` VALUES (6, 1);
INSERT INTO `role_has_permissions` VALUES (7, 1);
INSERT INTO `role_has_permissions` VALUES (8, 1);
INSERT INTO `role_has_permissions` VALUES (9, 1);
INSERT INTO `role_has_permissions` VALUES (10, 1);
INSERT INTO `role_has_permissions` VALUES (11, 1);
INSERT INTO `role_has_permissions` VALUES (12, 1);
INSERT INTO `role_has_permissions` VALUES (13, 1);
INSERT INTO `role_has_permissions` VALUES (14, 1);
INSERT INTO `role_has_permissions` VALUES (15, 1);
INSERT INTO `role_has_permissions` VALUES (16, 1);
INSERT INTO `role_has_permissions` VALUES (17, 1);
INSERT INTO `role_has_permissions` VALUES (18, 1);
INSERT INTO `role_has_permissions` VALUES (19, 1);
INSERT INTO `role_has_permissions` VALUES (20, 1);
INSERT INTO `role_has_permissions` VALUES (21, 1);
INSERT INTO `role_has_permissions` VALUES (22, 1);
INSERT INTO `role_has_permissions` VALUES (23, 1);
INSERT INTO `role_has_permissions` VALUES (24, 1);
INSERT INTO `role_has_permissions` VALUES (25, 1);
INSERT INTO `role_has_permissions` VALUES (26, 1);
INSERT INTO `role_has_permissions` VALUES (27, 1);
INSERT INTO `role_has_permissions` VALUES (28, 1);
INSERT INTO `role_has_permissions` VALUES (29, 1);
INSERT INTO `role_has_permissions` VALUES (30, 1);
INSERT INTO `role_has_permissions` VALUES (31, 1);
INSERT INTO `role_has_permissions` VALUES (32, 1);
INSERT INTO `role_has_permissions` VALUES (33, 1);
INSERT INTO `role_has_permissions` VALUES (34, 1);
INSERT INTO `role_has_permissions` VALUES (35, 1);
INSERT INTO `role_has_permissions` VALUES (36, 1);
INSERT INTO `role_has_permissions` VALUES (37, 1);
INSERT INTO `role_has_permissions` VALUES (38, 1);
INSERT INTO `role_has_permissions` VALUES (39, 1);
INSERT INTO `role_has_permissions` VALUES (40, 1);
INSERT INTO `role_has_permissions` VALUES (41, 1);
INSERT INTO `role_has_permissions` VALUES (42, 1);
INSERT INTO `role_has_permissions` VALUES (44, 1);
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO `roles` VALUES (1, 'admin', 'admin', '2020-07-16 18:47:16', '2020-07-16 18:47:16', NULL);
COMMIT;

-- ----------------------------
-- Table structure for source_stores
-- ----------------------------
DROP TABLE IF EXISTS `source_stores`;
CREATE TABLE `source_stores` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文件名',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1:图片 2:音频 3：视频 4:其它',
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '资源路径',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of source_stores
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
